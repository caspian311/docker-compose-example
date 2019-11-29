get '/api/messages' do
  payload = Message.all
  json payload
end
