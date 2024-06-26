# -*- encoding: utf-8 -*-
# stub: rack-cors 0.2.9 ruby lib

Gem::Specification.new do |s|
  s.name = "rack-cors".freeze
  s.version = "0.2.9"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Calvin Yu".freeze]
  s.date = "2013-11-12"
  s.description = "Middleware that will make Rack-based apps CORS compatible.  Read more here: http://blog.sourcebender.com/2010/06/09/introducin-rack-cors.html.  Fork the project here: http://github.com/cyu/rack-cors".freeze
  s.email = ["me@sourcebender.com".freeze]
  s.homepage = "http://github.com/cyu/rack-cors".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.5".freeze
  s.summary = "Middleware for enabling Cross-Origin Resource Sharing in Rack apps".freeze

  s.installed_by_version = "3.3.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.3"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<shoulda>.freeze, [">= 0"])
    s.add_development_dependency(%q<mocha>.freeze, [">= 0.14.0"])
    s.add_development_dependency(%q<rack-test>.freeze, [">= 0"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<shoulda>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, [">= 0.14.0"])
    s.add_dependency(%q<rack-test>.freeze, [">= 0"])
  end
end
