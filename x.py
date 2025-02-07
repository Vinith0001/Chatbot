import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Expanded Training Data with Synonyms & Variations
training_data = [
    "What courses are available on your website?",
    "What courses do you offer?",
    "List of courses available",
    "What are courses offered?",
    "Tell me about your courses",
    
    "How can I enroll in a course?",
    "What is the enrollment process?",
    "How do I sign up for a course?",
    "How to register for a course?",
    
    "Do you offer certification for completed courses?",
    "Will I receive a certificate after completing a course?",
    "Do courses provide certification?",
    
    "What if I have doubts while learning?",
    "How can I ask questions during the course?",
    "What should I do if I don’t understand something?",
    
    "Can I retake a course if I fail?",
    "Is there a retake policy?",
    "What happens if I fail a course?",
    
    "Will I get hands-on experience during the course?",
    "Are courses practical or theoretical?",
    "Do I get real-world projects?",
    
    "How advanced are the courses?",
    "Are your courses beginner-friendly?",
    "Are these courses for experts or beginners?",
    
    "Are the courses self-paced or instructor-led?",
    "Can I learn at my own pace?",
    "Are the lessons live or recorded?",
    
    "Can I get a mentor to guide me through the course?",
    "Do you provide mentorship?",
    "Will I have an assigned mentor?",
    
    "What happens if I miss a live session?",
    "Can I watch a recorded session if I miss it?",
    "Do you provide class recordings?",
    
    "Can I add the course certificate to my LinkedIn profile?",
    "Will my certificate be LinkedIn compatible?",
    
    "Is there any live session in the course?",
    "Do courses include live classes?",
    "Are sessions interactive?",
    
    "Are the courses available in multiple languages?",
    "Can I take courses in different languages?",
    "Do you offer multilingual courses?",
    
    "Do you provide quizzes or exams in the course?",
    "Are there assessments in the course?",
    "Will there be tests or quizzes?",
    
    "Do you offer weekend-only courses?",
    "Can I take classes only on weekends?",
    
    "Can I pay for courses in installments?",
    "Do you provide installment payment options?",
    
    "Can you recommend a course for building a portfolio?",
    "What is a good course for portfolio projects?",
    
    "Which is the cheapest course you provide?",
    "What is your most affordable course?",
    
    "Are there prerequisites for enrolling in certain courses?",
    "Do I need prior knowledge for any course?"
]

training_labels = [
    "course_list", "course_list", "course_list", "course_list", "course_list",
    "enrollment_process", "enrollment_process", "enrollment_process", "enrollment_process",
    "certification", "certification", "certification",
    "doubt_clearing", "doubt_clearing", "doubt_clearing",
    "retake_policy", "retake_policy", "retake_policy",
    "hands_on_experience", "hands_on_experience", "hands_on_experience",
    "course_advanced_level", "course_advanced_level", "course_advanced_level",
    "learning_mode", "learning_mode", "learning_mode",
    "mentorship", "mentorship", "mentorship",
    "missed_session", "missed_session", "missed_session",
    "linkedin_certificate", "linkedin_certificate",
    "live_sessions", "live_sessions", "live_sessions",
    "multi_language", "multi_language", "multi_language",
    "quizzes_exams", "quizzes_exams", "quizzes_exams",
    "weekend_courses", "weekend_courses",
    "installment_payment", "installment_payment",
    "portfolio_guidance", "portfolio_guidance",
    "cheapest_course", "cheapest_course",
    "prerequisites", "prerequisites"
]

# Define Pipeline with Improved Vectorizer
pipeline = Pipeline([
    ('vectorizer', CountVectorizer(lowercase=True, stop_words='english', ngram_range=(1,2))),  
    ('classifier', MultinomialNB())    
])

pipeline.fit(training_data, training_labels)

# Responses Dictionary
responses = {
    "course_list": "Loads of awesome courses like Cloud Computing, Machine Learning, Cyber Security, Python, Java, and even Digital Marketing!",
    "enrollment_process": "Click on the course, register, enter your details, and our team will contact you.",
    "certification": "Yeah, we provide certifications for all courses.",
    "doubt_clearing": "Our platform provides a Q&A forum, live chat support, and expert mentorship for resolving doubts.",
    "retake_policy": "Yes, you can retake the exam until you pass.",
    "hands_on_experience": "Yes, you will work on a real-world project to apply your learning. This ensures hands-on experience with practical implementation.",
    "course_advanced_level": "All the hot technologies - cloud, AI, programming, cybersecurity. We cover everything!",
    "learning_mode": "A combination of self-paced and instructor-led learning will lead to a balanced approach for mastering concepts.",
    "mentorship": "Yes, you’ll get a mentor with industry experience to guide you.",
    "missed_session": "When you miss a class, a recorded session will be forwarded to you for review.",
    "linkedin_certificate": "Yes, certificates are shareable on all platforms, including LinkedIn.",
    "live_sessions": "We have maximum live sessions for real interactive learning and to clear any doubts.",
    "multi_language": "Yes, we offer multiple languages based on your needs.",
    "quizzes_exams": "We provide exams and quizzes to monitor your progress and performance.",
    "weekend_courses": "We generally conduct sessions on weekends to balance professional life.",
    "installment_payment": "Yes, you can pay for courses in installments for enhanced learning.",
    "portfolio_guidance": "Yes, you can update your portfolio with the projects and skills gained.",
    "cheapest_course": "All the courses are the cheapest compared to other institutions.",
    "prerequisites": "Not at all! Our courses provide foundational content to help anyone, regardless of experience."
}

# Chatbot Function
def chatbot():
    print("Chatbot: Hi! I'm your course assistant. Type 'exit' to end the chat.")
    while True:
        user_input = input("You: ").strip().lower()
        
        if user_input == "exit":
            print("Chatbot: Exiting the chat. Happy learning!")
            break
        
        # Get prediction probabilities
        probabilities = pipeline.predict_proba([user_input])[0]
        max_prob = np.max(probabilities)  # Get highest probability
        intent = pipeline.classes_[np.argmax(probabilities)]  # Get predicted intent
        
        # Reduce threshold to 0.1
        threshold = 0.1  
        if max_prob < threshold:
            print("Chatbot: I'm sorry, I don't understand that. Can you rephrase?")
        else:
            response = responses.get(intent, "I'm sorry, I don't understand that. Can you rephrase?")
            print(f"Chatbot: {response}")

# Run chatbot
if __name__ == "__main__":
    chatbot()