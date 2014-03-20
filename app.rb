require 'sinatra'
require 'sinatra/assetpack'

  assets do
      serve '/js', :from => 'assets/scripts'
      js :application, [
        '/js/jquery.min.js',
        '/js/bootstrap.min.js',
        '/js/waypoints.min.js',
        '/js/waypoints-sticky.min.js',
        '/js/main.js'
      ]

      serve '/css', :from => 'assets/styles'
      css :application, [
        '/css/font-awesome.min.css',
        '/css/main.css'
       ]

      js_compression  :jsmin
      css_compression :sass
  end


  get '/' do
    erb :index
  end

  get '/sponsors' do
    erb :sponsors
  end
