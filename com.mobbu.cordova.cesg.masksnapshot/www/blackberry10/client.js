/*
 * Copyright (c) 2013 Mobbu Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Add a listener to the blackberry10 entercover event. When the application is minimised to
 * a frame this listener will replace the window cover with the application splash screen.
 * 
 * The logic for selecting a splash screen size is somewhat simplistic, we measure the window size and select
 * "720x720" or "768x1280" splash screens (q10 / z10). This does not take into account orientation or 
 * other screen sizes.
 * 
 * The splash screens are loaded from standard location res/screen/blackberry10/ and are expected to 
 * use standard file naming convention splash-[WIDTH]x[HEIGHT].png 
 */
document.addEventListener("deviceready", function() {
    var splashSize = window.outerHeight < 400 ? "720x720" : "768x1280";
    document.addEventListener("entercover", function() {
        blackberry.ui.cover.setContent(blackberry.ui.cover.TYPE_IMAGE, {
            path: "local:///res/screen/blackberry10/splash-" + splashSize + ".png"
        });
        /*blackberry.ui.cover.labels = [{
                label: splashSize,
                size: 10,
                wrap: true
        }];*/
        blackberry.ui.cover.updateCover();
    });
}, false);
