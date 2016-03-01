/**
 * Created by Mariandi on 11/03/2014.
 */
/*global angular*/
'use strict';

angular.module('anguvideo',[])
    .directive("anguvideo", ['$sce', '$interval', function ($sce, $interval) {
        return {
            restrict: 'EA',
            scope: {
                source: '=ngModel',
                width: '@',
                height: '@'
            },
            replace: true,
            template: '<div class="anguvideo embed-responsive embed-responsive-16by9">' +
                            '<iframe id="playerYV" class="videoClass" type="text/html" ng-src="{{url}}" allowfullscreen frameborder="0"></iframe>' +
                      '</div>',
            link: function (scope, element, attrs) {

              var player;
              scope.timer, scope.timeSpent = [];

              function onPlayerStateChange(event) {
                if (!event.data) {
                  scope.$emit("anguvideo:finishVideo");
                }
                if(event.data === 1) { // Started playing
                      if(!scope.timeSpent.length){
                          for(var i=0, l=parseInt(player.getDuration()); i<l; i++) scope.timeSpent.push(false);
                      }
                    scope.timer = $interval(record,100);
                  } else {
                   $interval.cancel(scope.timer);
                }
              }
              (function onYouTubeIframeAPIReady() {
                player = new YT.Player('playerYV', {
                  events: {
                    'onStateChange': onPlayerStateChange
                  }
                });
              }());

              function record(){
              	scope.timeSpent[ parseInt(player.getCurrentTime()) ] = true;
              	showPercentage();
              }

              function showPercentage(){
                  var percent = 0;
                  for(var i=0, l=scope.timeSpent.length; i<l; i++){
                      if(scope.timeSpent[i]) percent++;
                  }
                  percent = Math.round(percent / scope.timeSpent.length * 100);
                  console.log(percent + "%");
                  if(percent >= 70){
                    broadcastWatchedMinPercentage();
                    $interval.cancel(scope.timer);
                  }
              }

              function broadcastWatchedMinPercentage(){
                if(!scope.watchedMinPercentage){
                  scope.$emit("anguvideo:watchedMinPercentage");
                  scope.watchedMinPercentage = true;
                }
              }

                var origin = location.origin;
                var embedFriendlyUrl = "",
                    urlSections,
                    index;

                var youtubeParams = (attrs.hideControls ? '?autoplay=0&showinfo=0&controls=0&enablejsapi=1&origin='+origin : '?autoplay=0&enablejsapi=1&origin='+origin);

                scope.$watch('source', function (newVal) {
                    if (newVal) {
                        /*
                        * Need to convert the urls into a friendly url that can be embedded and be used in the available online players the services have provided
                        * for youtube: src="//www.youtube.com/embed/{{video_id}}"
                        * for vimeo: src="http://player.vimeo.com/video/{{video_id}}
                        */
                        scope.timer, scope.timeSpent = [];
                        scope.watchedMinPercentage = 0;
                        if (newVal.indexOf("vimeo") >= 0) { // Displaying a vimeo video
                            if (newVal.indexOf("player.vimeo") >= 0) {
                                embedFriendlyUrl = newVal;
                            } else {
                                embedFriendlyUrl = newVal.replace("https:", "http:");
                                urlSections = embedFriendlyUrl.split(".com/");
                                embedFriendlyUrl = embedFriendlyUrl.replace("vimeo", "player.vimeo");
                                embedFriendlyUrl = embedFriendlyUrl.replace("/" + urlSections[urlSections.length - 1], "/video/" + urlSections[urlSections.length - 1] + "");
                                embedFriendlyUrl += '?autoplay=0&api=1&player_id=playerYV';
                            }

                            $(function() {
                                  var iframe = $('#playerYV')[0];
                                  var player = $f(iframe);
                                  // When the player is ready, add listeners for pause, finish, and playProgress
                                  player.addEvent('ready', function() {
                                      player.addEvent('pause', function(){
                                        $interval.cancel(scope.timer);
                                      });
                                      player.addEvent('finish', function(){
                                        scope.$emit("anguvideo:finishVideo");
                                        $interval.cancel(scope.timer);
                                      });
                                      player.addEvent('play', function(){
                                        var PlayerVimeoDuration, PlayerVimeoCurrentTime;
                                        player.api('getDuration', function(PlayerVimeoDuration) {
                                          if(!scope.timeSpent.length){
                                            for(var i=0, l=parseInt(PlayerVimeoDuration); i<l; i++) scope.timeSpent.push(false);
                                          }
                                        });
                                      });
                                      player.addEvent('playProgress', function(data, id){
                                        scope.timeSpent[parseInt(data.seconds)] = true;
                                        showPercentage();
                                      });
                                  });
                                  scope.$on("anguvideo:watchedMinPercentage", function(){
                                    player.removeEvent('play');
                                    player.removeEvent('playProgress');
                                    player = undefined;
                                    iframe = undefined;
                                  });
                            });

                        } else if (newVal.indexOf("youtu.be") >= 0) {

                            index = newVal.indexOf(".be/");

                            embedFriendlyUrl = newVal.slice(index + 4, newVal.length);
                            embedFriendlyUrl = "http://www.youtube.com/embed/" + embedFriendlyUrl + youtubeParams;

                        } else if (newVal.indexOf("youtube.com") >= 0) { // displaying a youtube video
                            if (newVal.indexOf("embed") >= 0) {
                                embedFriendlyUrl = newVal + youtubeParams;
                            } else {
                                embedFriendlyUrl = newVal.replace("/watch?v=", "/embed/") + youtubeParams;
                            }
                        }

                        scope.url = $sce.trustAsResourceUrl(embedFriendlyUrl);
                        //console.log("done",  scope.url, embedFriendlyUrl);

                    }

                });

                scope.$on("$destroy",function(){
                  $interval.cancel(scope.timer);
                });
                element.on("$destroy",function() {
                  $interval.cancel(scope.timer);
                  scope.watchedMinPercentage = 0;
                })
            }
        };
    }]);
