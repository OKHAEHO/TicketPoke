#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import "react-native-config.h"  // Config import 추가
#import <KakaoOpenSDK/KakaoOpenSDK.h>  // 카카오 SDK import

@implementation AppDelegate

// 기존의 didFinishLaunchingWithOptions 메서드 수정
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // 환경 변수에서 카카오 앱 키 가져오기
    NSString *kakaoAppKey = [Config KAKAO_APP_KEY];
    
    // 카카오 SDK 초기화
    if (kakaoAppKey) {
        // 카카오 SDK 초기화 코드
        [KOSession sharedSession].kakaoAppKey = kakaoAppKey;
    }

    // React Native의 초기 설정 (이 부분은 그대로 두기)
    self.moduleName = @"tp";
    self.initialProps = @{};
    
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// 카카오 로그인 콜백 처리
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
                                      sourceApplication:(NSString *)sourceApplication
                                              annotation:(id)annotation {
    if ([KOSession isKakaoAccountLoginCallback:url]) {
        return [KOSession handleOpenURL:url];
    }
    return false;
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
                                                options:(NSDictionary<NSString *,id> *)options {
    if ([KOSession isKakaoAccountLoginCallback:url]) {
        return [KOSession handleOpenURL:url];
    }
    return false;
}

// 앱이 활성화될 때 호출되는 메서드
- (void)applicationDidBecomeActive:(UIApplication *)application
{
    [KOSession handleDidBecomeActive];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
