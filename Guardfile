guard :shell do
  watch %r{.*code/.*\.js$} do |m|
    `./copy-syntax.sh #{m[0]}`
  end
end

guard 'livereload' do
  watch 'demo/public/index.html'
  watch %r{demo/public/assets/.*\.css}
end
