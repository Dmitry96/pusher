class MessageObserver < ActiveRecord::Observer
  def after_save(message)
  Pusher.trigger('messages', 'new', {
    text: message.text,
    user_name: message.user_name
  })
  end
end