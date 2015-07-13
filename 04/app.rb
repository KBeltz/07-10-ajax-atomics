require "sinatra"

get "/" do
  erb :"home"
end

get "/:msg" do
  message = params["msg"]
  i = message.first

  if ("A".."Z").include?(i)
    return "You wrote #{message}. Is that someone's name?"
  elsif ("0".."9").include?(i)
    return "You wrote #{message}. Is that how old you are?"
  else
    return "You wrote #{message}. whatever."
  end
end
