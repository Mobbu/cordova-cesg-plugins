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
#import "CDVMaskSnapshot.h"
#import <Cordova/CDV.h>

@implementation CDVMaskSnapshot 

- (void)pluginInitialize {
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onWillResignActive) name:UIApplicationWillResignActiveNotification object:nil];

    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onDidBecomeActive) name:UIApplicationDidBecomeActiveNotification object:nil];
}

- (void)onWillResignActive {
    _imageView = [[UIImageView alloc] initWithFrame:[self.webView.window frame]];
    _imageView.image = [UIImage imageNamed:@"Default.png"];
    [self.webView.window addSubview:_imageView];
}

- (void)onDidBecomeActive {
    if(_imageView != nil) {
        [_imageView removeFromSuperview];
        _imageView = nil;
    }
}
@end