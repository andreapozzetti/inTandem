angular.module("starter.views", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/walkthrough.html","<ion-view class=\"walkthrough-view\" cache-view=\"false\">\n	<div class=\"walkthrough\">\n		<!-- device=\"iphone5|iphone5 black|iphone5 white\" -->\n		<!-- device=\"iphone6|iphone6 black|iphone6 white|iphone6 gold\" -->\n		<!-- device=\"iphone6-plus|iphone6-plus black|iphone6-plus white|iphone6-plus gold\" -->\n		<!-- device=\"galaxyS5|galaxyS5 black|galaxyS5 white|galaxyS5 gold\" -->\n		<!-- device=\"nexus6\" -->\n		<!-- device=\"auto\" -->\n		<device-slider device=\"iphone5 white\">\n			<ion-slide-box>\n				<ion-slide>\n					<div class=\"row slide-head\">\n						<div class=\"col\">\n							<h3>Welcome to this awesome WalkThrough!</h3>\n						</div>\n					</div>\n					<div class=\"row slide-body\">\n						<div class=\"col slide-body-wrapper\">\n							<img class=\"full-width-image\" ng-src=\"img/device-airbnb.png\">\n						</div>\n					</div>\n				</ion-slide>\n				<ion-slide>\n					<div class=\"row slide-head\">\n						<div class=\"col col-center\">\n							<h3>HTML5 markup</h3>\n						</div>\n					</div>\n					<div class=\"row slide-body\">\n						<div class=\"col slide-body-wrapper\">\n							<div class=\"row device-html-example\">\n								<div class=\"col col-center\">\n									<div id=\"icon\">\n										<img ng-src=\"img/icon.png\">\n									</div>\n									<p>\n										Use HTML5 markup or full width images\n									</p>\n								</div>\n							</div>\n						</div>\n					</div>\n				</ion-slide>\n				<ion-slide>\n					<div class=\"row slide-head\">\n						<div class=\"col col-center\">\n							<h3>Facebook paper screenshot</h3>\n						</div>\n					</div>\n					<div class=\"row slide-body\">\n						<div class=\"col slide-body-wrapper\">\n							<img class=\"full-width-image\" ng-src=\"img/device-facebook-paper.png\">\n						</div>\n					</div>\n				</ion-slide>\n				<ion-slide>\n					<div class=\"row slide-head\">\n						<div class=\"col col-center\">\n							<h3>Foursquare screenshot</h3>\n						</div>\n					</div>\n					<div class=\"row slide-body\">\n						<div class=\"col slide-body-wrapper\">\n							<img class=\"full-width-image\" ng-src=\"img/device-foursquare.png\">\n						</div>\n					</div>\n				</ion-slide>\n				<ion-slide>\n					<div class=\"row slide-head\">\n						<div class=\"col col-center\">\n							<h3>Instagram screenshot</h3>\n						</div>\n					</div>\n					<div class=\"row slide-body\">\n						<div class=\"col slide-body-wrapper\">\n							<img class=\"full-width-image\" ng-src=\"img/device-instagram.png\">\n						</div>\n					</div>\n				</ion-slide>\n				<ion-slide>\n					<div class=\"row slide-head\">\n						<div class=\"col col-center\">\n							<h3>Twitter screenshot</h3>\n						</div>\n					</div>\n					<div class=\"row slide-body\">\n						<div class=\"col slide-body-wrapper\">\n							<img class=\"full-width-image\" ng-src=\"img/device-twitter.png\">\n						</div>\n					</div>\n				</ion-slide>\n			</ion-slide-box>\n		</device-slider>\n\n		<div class=\"intro-buttons row\">\n			<div class=\"col col-center\">\n				<button class=\"button button-block button-positive\" ng-click=\"login()\">\n					Login with facebook\n				</button>\n				<p class=\"button-info\"><i class=\"icon ion-information-circled\"></i> We will never publish on your Facebook</p>\n			</div>\n		</div>\n	</div>\n</ion-view>\n");
$templateCache.put("views/common/misc/device-slider.html","<div class=\"device-slider {{ device }}\">\n	<device-frame class=\"device-wrapper row\">\n		<div class=\"col device-wrapper-body\">\n			<div class=\"row device-wrapper-container\">\n				<div class=\"col-20 left-dissapearing-effect\">\n				</div>\n				<div class=\"col center-dissapearing-effect\">\n					<div class=\"top-dissapearing-effect\"></div>\n					<div class=\"device-background {{ device }}\"></div>\n				</div>\n				<div class=\"col-20 right-dissapearing-effect\">\n				</div>\n			</div>\n		</div>\n	</device-frame>\n	<device-slides>\n		<ng-transclude></ng-transclude>\n	</device-slides>\n</div>\n");}]);