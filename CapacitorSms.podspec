
  Pod::Spec.new do |s|
    s.name = 'CapacitorSms'
    s.version = '0.0.1'
    s.summary = 'SMS'
    s.license = 'MIT'
    s.homepage = 'https://github.com/abritopach/capacitor-sms'
    s.author = 'Adrián Brito'
    s.source = { :git => 'https://github.com/abritopach/capacitor-sms', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '10.0'
    s.dependency 'Capacitor'
  end