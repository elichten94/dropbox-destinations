class Review < ApplicationRecord
    belongs_to :recommendation,  
    foreign_key: :rec_id,
    class_name: :Recommendation
end
