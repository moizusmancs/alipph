const APP_CONFIG = {
    languages: ['english', 'arabic', 'german'],
    categories: ['greetings', 'food', 'animals', 'colors']
  };
  
const QUIZ_DATA = {
english: {
    greeting: [
    {
      "question": "What's the correct response to 'Good morning'?",
      "answers": [
        { "text": "Good morning", "correct": true },
        { "text": "Goodnight", "correct": false },
        { "text": "You welcome", "correct": false },
        { "text": "Fine thank", "correct": false }
      ]
    },
    {
      "question": "How do you respond to 'How are you?'",
      "answers": [
        { "text": "Goodnight", "correct": false },
        { "text": "See you tomorrow", "correct": false },
        { "text": "I'm fine, thanks!", "correct": true },
        { "text": "You're welcome", "correct": false }
      ]
    },
    {
      "question": "What does 'Goodbye' mean?",
      "answers": [
        { "text": "Greeting someone", "correct": false },
        { "text": "Farewell", "correct": true },
        { "text": "Asking for help", "correct": false },
        { "text": "Thanking someone", "correct": false }
      ]
    },
    {
      "question": "Which phrase would you use when meeting someone for the first time?",
      "answers": [
        { "text": "Nice to meet you", "correct": true },
        { "text": "See you later", "correct": false },
        { "text": "Goodnight", "correct": false },
        { "text": "I'm sorry", "correct": false }
      ]
    },
    {
      "question": "What's an appropriate response to 'Thank you'?",
      "answers": [
        { "text": "Hello", "correct": false },
        { "text": "I'm fine", "correct": false },
        { "text": "Goodbye", "correct": false },
        { "text": "You're welcome", "correct": true }
      ]
    }
  ],
    food: [
    {
      "question": "What is this food? 🍎",
      "answers": [
        { "text": "Banana", "correct": false },
        { "text": "Apple", "correct": true },
        { "text": "Orange", "correct": false },
        { "text": "Grape", "correct": false }
      ]
    },
    {
      "question": "Which food is typically eaten for breakfast?",
      "answers": [
        { "text": "Pizza", "correct": false },
        { "text": "Steak", "correct": false },
        { "text": "Cereal", "correct": true },
        { "text": "Sushi", "correct": false }
      ]
    },
    {
      "question": "What is the main ingredient in bread?",
      "answers": [
        { "text": "Rice", "correct": false },
        { "text": "Flour", "correct": true },
        { "text": "Potatoes", "correct": false },
        { "text": "Cheese", "correct": false }
      ]
    },
    {
      "question": "Which of these is a dairy product?",
      "answers": [
        { "text": "Chicken", "correct": false },
        { "text": "Carrot", "correct": false },
        { "text": "Yogurt", "correct": true },
        { "text": "Bread", "correct": false }
      ]
    },
    {
      "question": "What is this drink? ☕",
      "answers": [
        { "text": "Tea", "correct": false },
        { "text": "Juice", "correct": false },
        { "text": "Coffee", "correct": true },
        { "text": "Milk", "correct": false }
      ]
    }
  ],
  animals: [
    {
      "question": "What animal is this? 🐘",
      "answers": [
        { "text": "Elephant", "correct": true },
        { "text": "Rhino", "correct": false },
        { "text": "Hippo", "correct": false },
        { "text": "Giraffe", "correct": false }
      ]
    },
    {
      "question": "Which animal says 'meow'?",
      "answers": [
        { "text": "Dog", "correct": false },
        { "text": "Cow", "correct": false },
        { "text": "Duck", "correct": false },
        { "text": "Cat", "correct": true }
      ]
    },
    {
      "question": "What animal lives in the ocean?",
      "answers": [
        { "text": "Lion", "correct": false },
        { "text": "Dolphin", "correct": true },
        { "text": "Elephant", "correct": false },
        { "text": "Giraffe", "correct": false }
      ]
    },
    {
      "question": "Which of these is a farm animal?",
      "answers": [
        { "text": "Pig", "correct": true },
        { "text": "Tiger", "correct": false },
        { "text": "Bear", "correct": false },
        { "text": "Kangaroo", "correct": false }
      ]
    },
    {
      "question": "What animal is this? 🦒",
      "answers": [
        { "text": "Zebra", "correct": false },
        { "text": "Horse", "correct": false },
        { "text": "Deer", "correct": false },
        { "text": "Giraffe", "correct": true }
      ]
    }
  ],
    colors: [
        {
          "question": "What color is this? 🔴",
          "answers": [
            { "text": "Blue", "correct": false },
            { "text": "Yellow", "correct": false },
            { "text": "Red", "correct": true },
            { "text": "Green", "correct": false }
          ]
        },
        {
          "question": "What color do you get by mixing blue and yellow?",
          "answers": [
            { "text": "Purple", "correct": false },
            { "text": "Orange", "correct": false },
            { "text": "Green", "correct": true },
            { "text": "Brown", "correct": false }
          ]
        },
        {
          "question": "What color is the sun? ☀️",
          "answers": [
            { "text": "White", "correct": false },
            { "text": "Blue", "correct": false },
            { "text": "Yellow", "correct": true },
            { "text": "Red", "correct": false }
          ]
        },
        {
          "question": "What color is grass?",
          "answers": [
            { "text": "Blue", "correct": false },
            { "text": "Green", "correct": true },
            { "text": "Purple", "correct": false },
            { "text": "Brown", "correct": false }
          ]
        },
        {
          "question": "What color is this? ⚫️",
          "answers": [
            { "text": "Black", "correct": true },
            { "text": "White", "correct": false },
            { "text": "Gray", "correct": false },
            { "text": "Blue", "correct": false }
          ]
        }
    ],
    travel: [
    {
      "question": "What is the most common phrase to ask for directions?",
      "answers": [
        { "text": "Where is the nearest hotel?", "correct": false },
        { "text": "How much does this cost?", "correct": false },
        { "text": "Excuse me, where is the train station?", "correct": true },
        { "text": "I'm hungry", "correct": false }
      ]
    },
    {
      "question": "What would you say to book a hotel room?",
      "answers": [
        { "text": "I'd like to check in", "correct": false },
        { "text": "Do you have any available rooms?", "correct": true },
        { "text": "Where is the restaurant?", "correct": false },
        { "text": "What time is checkout?", "correct": false }
      ]
    },
    {
      "question": "Which phrase would you use at airport security?",
      "answers": [
        { "text": "Is this your luggage?", "correct": false },
        { "text": "Here is my boarding pass", "correct": true },
        { "text": "I need a taxi", "correct": false },
        { "text": "What's the wifi password?", "correct": false }
      ]
    },
    {
      "question": "What's the appropriate question when buying a train ticket?",
      "answers": [
        { "text": "How much is a ticket to Paris?", "correct": true },
        { "text": "Where is the bathroom?", "correct": false },
        { "text": "Do you serve food here?", "correct": false },
        { "text": "What's your name?", "correct": false }
      ]
    },
    {
      "question": "Which phrase would help you find tourist attractions?",
      "answers": [
        { "text": "Can you recommend any museums?", "correct": true },
        { "text": "I need a doctor", "correct": false },
        { "text": "The weather is nice", "correct": false },
        { "text": "This food is delicious", "correct": false }
      ]
    }
  ],
  health: [
    {
      "question": "What would you say to describe a headache?",
      "answers": [
        { "text": "My stomach hurts", "correct": false },
        { "text": "I have pain in my head", "correct": true },
        { "text": "I feel very happy", "correct": false },
        { "text": "My leg is broken", "correct": false }
      ]
    },
    {
      "question": "Which phrase would you use at a pharmacy?",
      "answers": [
        { "text": "Do you have medicine for a cold?", "correct": true },
        { "text": "I'd like to book a hotel", "correct": false },
        { "text": "Where is the museum?", "correct": false },
        { "text": "How much is this souvenir?", "correct": false }
      ]
    },
    {
      "question": "What would you tell a doctor about a fever?",
      "answers": [
        { "text": "I have high temperature", "correct": true },
        { "text": "My arm is itchy", "correct": false },
        { "text": "I need new glasses", "correct": false },
        { "text": "I can't sleep well", "correct": false }
      ]
    },
    {
      "question": "Which phrase describes an emergency?",
      "answers": [
        { "text": "I need a dentist appointment", "correct": false },
        { "text": "Call an ambulance please", "correct": true },
        { "text": "Where is the pharmacy?", "correct": false },
        { "text": "I have a slight cough", "correct": false }
      ]
    },
    {
      "question": "What would you say about stomach pain?",
      "answers": [
        { "text": "My stomach hurts badly", "correct": true },
        { "text": "I have a toothache", "correct": false },
        { "text": "My head is spinning", "correct": false },
        { "text": "I need bandages", "correct": false }
      ]
    }
  ]
},
arabic: {
   greeting: [
    {
      "question": "ما هي الرد المناسب على 'صباح الخير'؟",
      "answers": [
        { "text": "صباح الخير", "correct": true },
        { "text": "تصبح على خير", "correct": false },
        { "text": "على الرحب والسعة", "correct": false },
        { "text": "بخير شكرا", "correct": false }
      ]
    },
    {
      "question": "كيف ترد على 'كيف حالك؟'",
      "answers": [
        { "text": "تصبح على خير", "correct": false },
        { "text": "أراك غدًا", "correct": false },
        { "text": "أنا بخير، شكرًا!", "correct": true },
        { "text": "على الرحب والسعة", "correct": false }
      ]
    },
    {
      "question": "ماذا تعني كلمة 'وداعا'؟",
      "answers": [
        { "text": "تحية شخص ما", "correct": false },
        { "text": "فراق", "correct": true },
        { "text": "طلب المساعدة", "correct": false },
        { "text": "شكر شخص ما", "correct": false }
      ]
    },
    {
      "question": "أي عبارة ستستخدمها عند مقابلة شخص لأول مرة؟",
      "answers": [
        { "text": "تشرفنا بمقابلتك", "correct": true },
        { "text": "أراك لاحقًا", "correct": false },
        { "text": "تصبح على خير", "correct": false },
        { "text": "أنا آسف", "correct": false }
      ]
    },
    {
      "question": "ما هو الرد المناسب على 'شكرًا'؟",
      "answers": [
        { "text": "مرحبًا", "correct": false },
        { "text": "أنا بخير", "correct": false },
        { "text": "وداعًا", "correct": false },
        { "text": "على الرحب والسعة", "correct": true }
      ]
    }
  ],
  food: [
    {
      "question": "ما هذا الطعام؟ 🍎",
      "answers": [
        { "text": "موز", "correct": false },
        { "text": "تفاح", "correct": true },
        { "text": "برتقال", "correct": false },
        { "text": "عنب", "correct": false }
      ]
    },
    {
      "question": "أي طعام يؤكل عادة في الإفطار؟",
      "answers": [
        { "text": "بيتزا", "correct": false },
        { "text": "ستيك", "correct": false },
        { "text": "حبوب الإفطار", "correct": true },
        { "text": "سوشي", "correct": false }
      ]
    },
    {
      "question": "ما هو المكون الرئيسي في الخبز؟",
      "answers": [
        { "text": "أرز", "correct": false },
        { "text": "دقيق", "correct": true },
        { "text": "بطاطس", "correct": false },
        { "text": "جبن", "correct": false }
      ]
    },
    {
      "question": "أي من هذه منتج ألبان؟",
      "answers": [
        { "text": "دجاج", "correct": false },
        { "text": "جزر", "correct": false },
        { "text": "زبادي", "correct": true },
        { "text": "خبز", "correct": false }
      ]
    },
    {
      "question": "ما هذا المشروب؟ ☕",
      "answers": [
        { "text": "شاي", "correct": false },
        { "text": "عصير", "correct": false },
        { "text": "قهوة", "correct": true },
        { "text": "حليب", "correct": false }
      ]
    }
  ],
  animals: [
    {
      "question": "ما هذا الحيوان؟ 🐘",
      "answers": [
        { "text": "فيل", "correct": true },
        { "text": "كركدن", "correct": false },
        { "text": "فرس النهر", "correct": false },
        { "text": "زرافة", "correct": false }
      ]
    },
    {
      "question": "أي حيوان يقول 'مواء'؟",
      "answers": [
        { "text": "كلب", "correct": false },
        { "text": "بقرة", "correct": false },
        { "text": "بطة", "correct": false },
        { "text": "قطة", "correct": true }
      ]
    },
    {
      "question": "أي حيوان يعيش في المحيط؟",
      "answers": [
        { "text": "أسد", "correct": false },
        { "text": "دلفين", "correct": true },
        { "text": "فيل", "correct": false },
        { "text": "زرافة", "correct": false }
      ]
    },
    {
      "question": "أي من هذه حيوان مزرعة؟",
      "answers": [
        { "text": "خنزير", "correct": true },
        { "text": "نمر", "correct": false },
        { "text": "دب", "correct": false },
        { "text": "كنغر", "correct": false }
      ]
    },
    {
      "question": "ما هذا الحيوان؟ 🦒",
      "answers": [
        { "text": "حمار وحشي", "correct": false },
        { "text": "حصان", "correct": false },
        { "text": "غزال", "correct": false },
        { "text": "زرافة", "correct": true }
      ]
    }
  ],
  colors: [
    {
      "question": "ما هذا اللون؟ 🔴",
      "answers": [
        { "text": "أزرق", "correct": false },
        { "text": "أصفر", "correct": false },
        { "text": "أحمر", "correct": true },
        { "text": "أخضر", "correct": false }
      ]
    },
    {
      "question": "ما اللون الذي تحصل عليه بخلط الأزرق والأصفر؟",
      "answers": [
        { "text": "بنفسجي", "correct": false },
        { "text": "برتقالي", "correct": false },
        { "text": "أخضر", "correct": true },
        { "text": "بني", "correct": false }
      ]
    },
    {
      "question": "ما لون الشمس؟ ☀️",
      "answers": [
        { "text": "أبيض", "correct": false },
        { "text": "أزرق", "correct": false },
        { "text": "أصفر", "correct": true },
        { "text": "أحمر", "correct": false }
      ]
    },
    {
      "question": "ما لون العشب؟",
      "answers": [
        { "text": "أزرق", "correct": false },
        { "text": "أخضر", "correct": true },
        { "text": "بنفسجي", "correct": false },
        { "text": "بني", "correct": false }
      ]
    },
    {
      "question": "ما هذا اللون؟ ⚫️",
      "answers": [
        { "text": "أسود", "correct": true },
        { "text": "أبيض", "correct": false },
        { "text": "رمادي", "correct": false },
        { "text": "أزرق", "correct": false }
      ]
    }
  ],
  travel: [
    {
      "question": "ما هي العبارة الأكثر شيوعًا لطلب الاتجاهات؟",
      "answers": [
        { "text": "أين يوجد أقرب فندق؟", "correct": false },
        { "text": "كم ثمن هذا؟", "correct": false },
        { "text": "المعذرة، أين محطة القطار؟", "correct": true },
        { "text": "أنا جائع", "correct": false }
      ]
    },
    {
      "question": "ماذا تقول لحجز غرفة في فندق؟",
      "answers": [
        { "text": "أريد تسجيل الوصول", "correct": false },
        { "text": "هل لديك أي غرف متاحة؟", "correct": true },
        { "text": "أين المطعم؟", "correct": false },
        { "text": "ما وقت تسجيل المغادرة؟", "correct": false }
      ]
    },
    {
      "question": "أي عبارة ستستخدمها عند أمن المطار؟",
      "answers": [
        { "text": "هل هذه أمتعتك؟", "correct": false },
        { "text": "ها هو بطاقة صعودي", "correct": true },
        { "text": "أحتاج إلى تاكسي", "correct": false },
        { "text": "ما هي كلمة سر الواي فاي؟", "correct": false }
      ]
    },
    {
      "question": "ما هو السؤال المناسب عند شراء تذكرة قطار؟",
      "answers": [
        { "text": "كم سعر تذكرة إلى باريس؟", "correct": true },
        { "text": "أين الحمام؟", "correct": false },
        { "text": "هل تقدمون طعامًا هنا؟", "correct": false },
        { "text": "ما اسمك؟", "correct": false }
      ]
    },
    {
      "question": "أي عبارة ستساعدك في العثور على المعالم السياحية؟",
      "answers": [
        { "text": "هل يمكنك التوصية بأي متاحف؟", "correct": true },
        { "text": "أحتاج إلى طبيب", "correct": false },
        { "text": "الجو جميل", "correct": false },
        { "text": "هذا الطعام لذيذ", "correct": false }
      ]
    }
  ],
  health: [
    {
      "question": "ماذا تقول لوصف صداع الرأس؟",
      "answers": [
        { "text": "بطني يؤلمني", "correct": false },
        { "text": "لدي ألم في رأسي", "correct": true },
        { "text": "أشعر بالسعادة", "correct": false },
        { "text": "ساقي مكسورة", "correct": false }
      ]
    },
    {
      "question": "أي عبارة ستستخدمها في الصيدلية؟",
      "answers": [
        { "text": "هل لديك دواء للبرد؟", "correct": true },
        { "text": "أريد حجز فندق", "correct": false },
        { "text": "أين المتحف؟", "correct": false },
        { "text": "كم ثمن هذه التحفة؟", "correct": false }
      ]
    },
    {
      "question": "ماذا ستخبر الطبيب عن الحمى؟",
      "answers": [
        { "text": "لدي حرارة مرتفعة", "correct": true },
        { "text": "ذراعي تشعرني بالحكة", "correct": false },
        { "text": "أحتاج إلى نظارات جديدة", "correct": false },
        { "text": "لا أستطيع النوم جيدًا", "correct": false }
      ]
    },
    {
      "question": "أي عبارة تصف حالة طارئة؟",
      "answers": [
        { "text": "أحتاج إلى موعد مع طبيب الأسنان", "correct": false },
        { "text": "الرجاء استدعاء سيارة إسعاف", "correct": true },
        { "text": "أين الصيدلية؟", "correct": false },
        { "text": "لدي سعال خفيف", "correct": false }
      ]
    },
    {
      "question": "ماذا تقول عن ألم المعدة؟",
      "answers": [
        { "text": "بطني يؤلمني بشدة", "correct": true },
        { "text": "لدي ألم في سني", "correct": false },
        { "text": "رأسي يدور", "correct": false },
        { "text": "أحتاج إلى ضمادات", "correct": false }
      ]
    }
  ]
},
german: {
  greeting: [
    {
      "question": "Wie antwortet man richtig auf 'Guten Morgen'?",
      "answers": [
        { "text": "Guten Morgen", "correct": true },
        { "text": "Gute Nacht", "correct": false },
        { "text": "Bitte schön", "correct": false },
        { "text": "Gut danke", "correct": false }
      ]
    },
    {
      "question": "Wie antwortet man auf 'Wie geht's?'",
      "answers": [
        { "text": "Gute Nacht", "correct": false },
        { "text": "Bis morgen", "correct": false },
        { "text": "Mir geht's gut, danke!", "correct": true },
        { "text": "Bitte schön", "correct": false }
      ]
    },
    {
      "question": "Was bedeutet 'Auf Wiedersehen'?",
      "answers": [
        { "text": "Jemanden begrüßen", "correct": false },
        { "text": "Abschied", "correct": true },
        { "text": "Um Hilfe bitten", "correct": false },
        { "text": "Jemandem danken", "correct": false }
      ]
    },
    {
      "question": "Welchen Ausdruck verwendet man bei der ersten Begegnung?",
      "answers": [
        { "text": "Freut mich, dich kennenzulernen", "correct": true },
        { "text": "Bis später", "correct": false },
        { "text": "Gute Nacht", "correct": false },
        { "text": "Entschuldigung", "correct": false }
      ]
    },
    {
      "question": "Wie antwortet man angemessen auf 'Danke'?",
      "answers": [
        { "text": "Hallo", "correct": false },
        { "text": "Mir geht's gut", "correct": false },
        { "text": "Auf Wiedersehen", "correct": false },
        { "text": "Bitte schön", "correct": true }
      ]
    }
  ],
  food: [
    {
      "question": "Was ist das für ein Essen? 🍎",
      "answers": [
        { "text": "Banane", "correct": false },
        { "text": "Apfel", "correct": true },
        { "text": "Orange", "correct": false },
        { "text": "Traube", "correct": false }
      ]
    },
    {
      "question": "Welches Essen isst man typischerweise zum Frühstück?",
      "answers": [
        { "text": "Pizza", "correct": false },
        { "text": "Steak", "correct": false },
        { "text": "Müsli", "correct": true },
        { "text": "Sushi", "correct": false }
      ]
    },
    {
      "question": "Was ist die Hauptzutat in Brot?",
      "answers": [
        { "text": "Reis", "correct": false },
        { "text": "Mehl", "correct": true },
        { "text": "Kartoffeln", "correct": false },
        { "text": "Käse", "correct": false }
      ]
    },
    {
      "question": "Welches davon ist ein Milchprodukt?",
      "answers": [
        { "text": "Hühnchen", "correct": false },
        { "text": "Karotte", "correct": false },
        { "text": "Joghurt", "correct": true },
        { "text": "Brot", "correct": false }
      ]
    },
    {
      "question": "Was ist das für ein Getränk? ☕",
      "answers": [
        { "text": "Tee", "correct": false },
        { "text": "Saft", "correct": false },
        { "text": "Kaffee", "correct": true },
        { "text": "Milch", "correct": false }
      ]
    }
  ],
  animals: [
    {
      "question": "Welches Tier ist das? 🐘",
      "answers": [
        { "text": "Elefant", "correct": true },
        { "text": "Nashorn", "correct": false },
        { "text": "Nilpferd", "correct": false },
        { "text": "Giraffe", "correct": false }
      ]
    },
    {
      "question": "Welches Tier macht 'miau'?",
      "answers": [
        { "text": "Hund", "correct": false },
        { "text": "Kuh", "correct": false },
        { "text": "Ente", "correct": false },
        { "text": "Katze", "correct": true }
      ]
    },
    {
      "question": "Welches Tier lebt im Ozean?",
      "answers": [
        { "text": "Löwe", "correct": false },
        { "text": "Delfin", "correct": true },
        { "text": "Elefant", "correct": false },
        { "text": "Giraffe", "correct": false }
      ]
    },
    {
      "question": "Welches davon ist ein Nutztier?",
      "answers": [
        { "text": "Schwein", "correct": true },
        { "text": "Tiger", "correct": false },
        { "text": "Bär", "correct": false },
        { "text": "Känguru", "correct": false }
      ]
    },
    {
      "question": "Welches Tier ist das? 🦒",
      "answers": [
        { "text": "Zebra", "correct": false },
        { "text": "Pferd", "correct": false },
        { "text": "Hirsch", "correct": false },
        { "text": "Giraffe", "correct": true }
      ]
    }
  ],
  colors: [
    {
      "question": "Welche Farbe ist das? 🔴",
      "answers": [
        { "text": "Blau", "correct": false },
        { "text": "Gelb", "correct": false },
        { "text": "Rot", "correct": true },
        { "text": "Grün", "correct": false }
      ]
    },
    {
      "question": "Welche Farbe entsteht durch Mischen von Blau und Gelb?",
      "answers": [
        { "text": "Lila", "correct": false },
        { "text": "Orange", "correct": false },
        { "text": "Grün", "correct": true },
        { "text": "Braun", "correct": false }
      ]
    },
    {
      "question": "Welche Farbe hat die Sonne? ☀️",
      "answers": [
        { "text": "Weiß", "correct": false },
        { "text": "Blau", "correct": false },
        { "text": "Gelb", "correct": true },
        { "text": "Rot", "correct": false }
      ]
    },
    {
      "question": "Welche Farbe hat Gras?",
      "answers": [
        { "text": "Blau", "correct": false },
        { "text": "Grün", "correct": true },
        { "text": "Lila", "correct": false },
        { "text": "Braun", "correct": false }
      ]
    },
    {
      "question": "Welche Farbe ist das? ⚫️",
      "answers": [
        { "text": "Schwarz", "correct": true },
        { "text": "Weiß", "correct": false },
        { "text": "Grau", "correct": false },
        { "text": "Blau", "correct": false }
      ]
    }
  ],
  travel: [
    {
      "question": "Wie fragt man am häufigsten nach dem Weg?",
      "answers": [
        { "text": "Wo ist das nächste Hotel?", "correct": false },
        { "text": "Wie viel kostet das?", "correct": false },
        { "text": "Entschuldigung, wo ist der Bahnhof?", "correct": true },
        { "text": "Ich habe Hunger", "correct": false }
      ]
    },
    {
      "question": "Was sagt man, um ein Hotelzimmer zu buchen?",
      "answers": [
        { "text": "Ich möchte einchecken", "correct": false },
        { "text": "Haben Sie noch Zimmer frei?", "correct": true },
        { "text": "Wo ist das Restaurant?", "correct": false },
        { "text": "Wann ist Check-out?", "correct": false }
      ]
    },
    {
      "question": "Welchen Satz verwendet man bei der Flughafensicherheit?",
      "answers": [
        { "text": "Ist das Ihr Gepäck?", "correct": false },
        { "text": "Hier ist mein Boarding-Pass", "correct": true },
        { "text": "Ich brauche ein Taxi", "correct": false },
        { "text": "Wie lautet das WLAN-Passwort?", "correct": false }
      ]
    },
    {
      "question": "Wie fragt man angemessen nach einer Zugfahrkarte?",
      "answers": [
        { "text": "Wie viel kostet ein Ticket nach Paris?", "correct": true },
        { "text": "Wo ist die Toilette?", "correct": false },
        { "text": "Gibt es hier Essen?", "correct": false },
        { "text": "Wie heißen Sie?", "correct": false }
      ]
    },
    {
      "question": "Welche Frage hilft bei der Suche nach Sehenswürdigkeiten?",
      "answers": [
        { "text": "Können Sie Museen empfehlen?", "correct": true },
        { "text": "Ich brauche einen Arzt", "correct": false },
        { "text": "Das Wetter ist schön", "correct": false },
        { "text": "Dieses Essen ist lecker", "correct": false }
      ]
    }
  ],
  health: [
    {
      "question": "Wie beschreibt man Kopfschmerzen?",
      "answers": [
        { "text": "Mein Bauch tut weh", "correct": false },
        { "text": "Ich habe Kopfschmerzen", "correct": true },
        { "text": "Ich fühle mich sehr glücklich", "correct": false },
        { "text": "Mein Bein ist gebrochen", "correct": false }
      ]
    },
    {
      "question": "Welchen Satz verwendet man in der Apotheke?",
      "answers": [
        { "text": "Haben Sie Medizin gegen Erkältung?", "correct": true },
        { "text": "Ich möchte ein Hotel buchen", "correct": false },
        { "text": "Wo ist das Museum?", "correct": false },
        { "text": "Wie viel kostet dieses Souvenir?", "correct": false }
      ]
    },
    {
      "question": "Was sagt man einem Arzt über Fieber?",
      "answers": [
        { "text": "Ich habe Fieber", "correct": true },
        { "text": "Mein Arm juckt", "correct": false },
        { "text": "Ich brauche eine neue Brille", "correct": false },
        { "text": "Ich kann nicht gut schlafen", "correct": false }
      ]
    },
    {
      "question": "Welcher Satz beschreibt einen Notfall?",
      "answers": [
        { "text": "Ich brauche einen Zahnarzttermin", "correct": false },
        { "text": "Rufen Sie bitte einen Krankenwagen", "correct": true },
        { "text": "Wo ist die Apotheke?", "correct": false },
        { "text": "Ich habe leichten Husten", "correct": false }
      ]
    },
    {
      "question": "Wie beschreibt man Bauchschmerzen?",
      "answers": [
        { "text": "Mein Bauch tut sehr weh", "correct": true },
        { "text": "Ich habe Zahnschmerzen", "correct": false },
        { "text": "Mir ist schwindelig", "correct": false },
        { "text": "Ich brauche Verbände", "correct": false }
      ]
    }
  ]
}
};

const VIDEO_DATA = {
    english: [
      {
        title: "English Greetings Video",
        url: "https://www.youtube.com/embed/abc123", // embed URLs
        access: "premium"
      },
      {
        title: "English Food Vocabulary",
        url: "https://www.youtube.com/embed/def456",
        access: "standard"
      }
    ],
    arabic: [
      {
        title: "Arabic Greetings",
        url: "https://www.youtube.com/embed/ghi789",
        access: "premium"
      }
    ],
    german: [
      {
        title: "German Basics",
        url: "https://www.youtube.com/embed/jkl321",
        access: "standard"
      }
    ]
  };
  