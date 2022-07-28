class Recommendation < ApplicationRecord
    has_many :reviews,
    foreign_key: :rec_id,
    class_name: :Review
    
    belongs_to :user
end
