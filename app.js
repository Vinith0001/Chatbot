document.addEventListener('DOMContentLoaded', function () {
    const chatboxInput = document.getElementById('chatbox__input');
    const sendButton = document.getElementById('send__button');
    const chatboxMessages = document.querySelector('.chatbox__messages');
    const chatboxSupport = document.querySelector('.chatbox__support');
    const chatboxButton = document.querySelector('.chatbox__button button');

    // Updated dataset (questions and answers)
    const searchData = [
        {
            question: "What courses are available on your website?",
            answer: "Loads of awesome courses like Cloud Computing, Machine Learning, Cyber Security, Python, Java, and even Digital Marketing!"
        },
        {
            question: "How can I enroll in a course?",
            answer: "Click on the course, register, enter your details, and our team will contact you."
        },
        {
            question: "Do you offer certification for completed courses?",
            answer: "Yeah, we provide certifications for all courses."
        },
        {
            question: "What if I have doubts while learning?",
            answer: "Our platform provides a Q&A forum, live chat support, and expert mentorship for resolving doubts."
        },
        {
            question: "Can I retake a course if I fail?",
            answer: "Yes, you can retake the exam until you pass."
        },
        {
            question: "Will I get hands-on experience during the course?",
            answer: "Yes, you will work on a real-world project to apply your learning. This ensures hands-on experience with practical implementation."
        },
        {
            question: "How advanced are the courses?",
            answer: "All the hot technologies - cloud, AI, programming, cybersecurity. We cover everything!"
        },
        {
            question: "Are the courses self-paced or instructor-led?",
            answer: "A combination of self-paced and instructor-led learning will lead to a balanced approach for mastering concepts."
        },
        {
            question: "Can I get a mentor to guide me through the course?",
            answer: "Yes, you’ll get a mentor with industry experience to guide you."
        },
        {
            question: "What happens if I miss a live session?",
            answer: "When you miss a class, a recorded session will be forwarded to you for review."
        },
        {
            question: "Can I add the course certificate to my LinkedIn profile?",
            answer: "Yes, certificates are shareable on all platforms, including LinkedIn."
        },
        {
            question: "Is there any live session in the course?",
            answer: "We have maximum live sessions for real interactive learning and to clear any doubts."
        },
        {
            question: "Are the courses available in multiple languages?",
            answer: "Yes, we offer multiple languages based on your needs."
        },
        {
            question: "Do you provide quizzes or exams in the course?",
            answer: "We provide exams and quizzes to monitor your progress and performance."
        },
        {
            question: "Do you offer weekend-only courses?",
            answer: "We generally conduct sessions on weekends to balance professional life."
        },
        {
            question: "Can I pay for courses in installments?",
            answer: "Yes, you can pay for courses in installments for enhanced learning."
        },
        {
            question: "Can you recommend a course for building a portfolio?",
            answer: "Yes, you can update your portfolio with the projects and skills gained."
        },
        {
            question: "Which is the cheapest course you are providing?",
            answer: "All the courses are the cheapest compared to other institutions."
        },
        {
            question: "Are there prerequisites for enrolling in certain courses?",
            answer: "Not at all! Our courses provide foundational content to help anyone, regardless of experience."
        },
        {
            question: "Can I customize a course based on my needs?",
            answer: "Yes, we customize the course based on your learning goals and career needs."
        },
        {
            question: "Do your courses include real-world projects?",
            answer: "We issue a professionally designed project based on real-world scenarios and case studies."
        },
        {
            question: "Are there regular assessments or tests?",
            answer: "Assessments and tests are conducted to monitor your progress and understanding."
        },
        {
            question: "Can I skip lessons if I already know the topic?",
            answer: "We teach the depth of the concepts with examples, so it's better to attend even if you know the topic."
        },
        {
            question: "Do your courses have partnerships with tech companies?",
            answer: "No, we don't have any partnership with tech companies."
        },
        {
            question: "Are job placement services provided after course completion?",
            answer: "Yes, we train you for placements to ensure a job in the IT industry."
        },
        {
            question: "Are there options for one-on-one mentorship?",
            answer: "Yes, you receive 1-to-1 mentorship with our industry expert."
        },
        {
            question: "Do you provide a roadmap for DevOps mastery?",
            answer: "Yes, we provide a roadmap at the introduction of our class to guide your learning journey."
        },
        {
            question: "Do you provide a roadmap for Cloud Computing?",
            answer: "Yes, we provide a roadmap at the introduction of our class to guide your learning journey."
        },
        {
            question: "What job roles can I apply for after completing Cloud Computing?",
            answer: "Job roles in cloud computing include Cloud Architect, Engineer, Developer, and Security Specialist. Other roles include Cloud Consultant, Systems Administrator, and Cloud Operations Manager."
        },
        {
            question: "What job roles can I apply for after completing Data Science?",
            answer: "Job roles in data science include Data Scientist, Data Analyst, Machine Learning Engineer, and more. These roles focus on analyzing data, building models, and providing actionable insights for decision-making."
        },
        {
            question: "What job roles can I apply for after completing DevOps?",
            answer: "Job roles for DevOps include DevOps Engineer, responsible for automating and optimizing processes, and Site Reliability Engineer (SRE), ensuring system reliability. Other roles include Automation Engineer, Cloud Engineer, Build and Release Engineer, and Infrastructure Engineer."
        },
        {
            question: "What job roles can I apply for after completing Machine Learning?",
            answer: "Job roles for ML include Machine Learning Engineer, who builds and deploys models, and Data Scientist, who analyzes data to derive insights. Other roles include AI Researcher, Deep Learning Engineer, and Data Engineer."
        },
        {
            question: "What job roles can I apply for after completing Cybersecurity?",
            answer: "Job roles for Cybersecurity include Security Analyst, responsible for protecting systems from threats, and Security Engineer, who designs secure networks. Other roles include Penetration Tester, Security Architect, and Incident Responder."
        },
        {
            question: "Do you teach resume-building and interview preparation?",
            answer: "Yes, we assist with resume building and interview preparation to enhance your chances of landing a job in the IT industry."
        },
        {
            question: "Are there any live coding sessions?",
            answer: "Yes, we conduct live coding sessions in programming courses for practical experience and real-time feedback."
        },
        {
            question: "Do you use AI tools to enhance learning?",
            answer: "Yes, we use AI tools to enhance learning and train you for better and faster work in the industry."
        },
        {
            question: "Are there case studies included in the courses?",
            answer: "Yes, there are case studies to help you apply theoretical knowledge to real-world scenarios."
        },
        {
            question: "How can I access the courses?",
            answer: "Simply sign up on our platform, choose your course, and start learning immediately."
        },
        {
            question: "What exactly does Cloud4Green do?",
            answer: "We help students learn cool tech stuff like cloud computing, coding, and digital skills with super practical training."
        },
        {
            question: "What courses can I study here?",
            answer: "Loads of awesome courses like Cloud Computing, Machine Learning, Cyber Security, Python, Java, and even Digital Marketing!"
        },
        {
            question: "How long will the course take?",
            answer: "Just one month - 32 hours of intense learning. Perfect for students who want quick, powerful skills."
        },
        {
            question: "Which certification exams can I prepare for?",
            answer: "Microsoft, AWS, Azure, Google Cloud, Linux, VMware - basically all the big tech certifications!"
        },
        {
            question: "What's the internet speed in labs?",
            answer: "Blazing fast 150 MBPS. No buffering, no waiting!"
        },
        {
            question: "Do I need to buy expensive software?",
            answer: "Nope! We provide all licensed software. Everything's included in your course."
        },
        {
            question: "What if I get stuck with something?",
            answer: "We've got 24/7 engineer support. Help is always just a call away!"
        },
        {
            question: "Why should I choose Cloud4Green?",
            answer: "We make learning easy, practical, and job-ready. No boring theoretical stuff."
        },
        {
            question: "How are the courses structured?",
            answer: "Totally hands-on! Real projects, industry scenarios, practical skills."
        },
        {
            question: "Are the lab facilities good?",
            answer: "World-class! We simulate real work environments so you learn exactly what companies need."
        },
        {
            question: "Can I manage studies with work?",
            answer: "Totally! We offer flexible online and offline classes."
        },
        {
            question: "Do I need prior knowledge?",
            answer: "Some courses need basics, some are for complete beginners. We've got something for everyone!"
        },
        {
            question: "How updated are the courses?",
            answer: "Super updated! We refresh content regularly to match industry trends."
        },
        {
            question: "Which technologies will I learn?",
            answer: "All the hot technologies - cloud, AI, programming, cybersecurity. We cover everything!"
        },
        {
            question: "How will I actually learn?",
            answer: "By doing! Projects, case studies, real-world simulations."
        },
        {
            question: "What platforms do you support?",
            answer: "Every possible platform - Windows, Linux, Mac, cloud platforms - you name it!"
        },
        {
            question: "Is my data safe?",
            answer: "100% secure. We have top-notch security and disaster recovery plans."
        },
        {
            question: "What makes you different from other institutes?",
            answer: "We focus on skills, not just certificates. Practical learning is our mantra!"
        },
        {
            question: "Can international students join?",
            answer: "Absolutely! Flexible learning for everyone, anywhere."
        },
        {
            question: "How will my progress be checked?",
            answer: "Through real projects, practical exams, and skill demonstrations."
        },
        {
            question: "What after completing the course?",
            answer: "Continuous learning programs, advanced modules to keep upgrading your skills."
        },
        {
            question: "Why should a student trust Cloud4Green?",
            answer: "Industry-aligned curriculum, expert trainers, guaranteed skill development."
        },
        {
            question: "How comprehensive are the evaluations?",
            answer: "We check everything - your projects, practical skills, real understanding."
        },
        {
            question: "What infrastructure services do you offer?",
            answer: "Yes! Virtual machines, cloud resources available on rental."
        },
        {
            question: "Is learning a one-time thing here?",
            answer: "No way! We believe in continuous learning and skill enhancement."
        },
        {
            question: "Do you support students globally?",
            answer: "24/7 support across different time zones. We're always here!"
        },
        {
            question: "How do I get in touch?",
            answer: "Just visit our website or drop us a message. We'll get back quickly!"
        },
        {
            question: "What are the key benefits of Cloud4Green's infrastructure?",
            answer: "Cost reduction, global support, optimized performance, automated lifecycle management."
        },
        {
            question: "What makes the practice labs unique?",
            answer: "Real-world simulation environments, professional-grade infrastructure, exam preparation focus."
        },
        {
            question: "What career support services are provided?",
            answer: "Job placement assistance, resume workshops, interview preparation."
        },
        {
            question: "How frequently is course content updated?",
            answer: "Regular curriculum revisions to align with latest technological trends."
        },
        {
            question: "What are the key strategic benefits?",
            answer: "Cost optimization, technological adaptability, standardized processes."
        },
        {
            question: "What assessment methods are used?",
            answer: "Continuous assessment, project evaluations, practical examinations."
        },
        {
            question: "Are there rental services available?",
            answer: "Yes, including cloud computing resources, virtual machine rentals."
        },
        {
            question: "How can interested individuals contact Cloud4Green Technologies?",
            answer: "Direct contact through their website or customer service channels."
        },
        {
            question: "Are the courses beginner-friendly?",
            answer: "Yes! We have beginner-friendly courses with step-by-step guidance to help you start learning from scratch."
        },
        {
            question: "Do I need prior experience to enroll in these courses?",
            answer: "Not at all! Our courses provide foundational content to help anyone, regardless of experience."
        },
        {
            question: "Can I download the course content?",
            answer: "Yes, video lectures and notes can be downloaded for offline learning."
        },
        {
            question: "Are the courses self-paced?",
            answer: "Yes, all our courses are self-paced, so you can learn at your convenience."
        },
        {
            question: "Is there any trial period or free content?",
            answer: "Yes, we offer free introductory modules for all our courses."
        },
        {
            question: "What topics are covered in the Machine Learning course?",
            answer: "Topics include supervised and unsupervised learning, neural networks, decision trees, and hands-on projects."
        },
        {
            question: "Does the ML course include Python tutorials?",
            answer: "Yes! Python basics and libraries like NumPy, pandas, and scikit-learn are covered."
        },
        {
            question: "Are there real-world projects in the ML course?",
            answer: "Absolutely! You’ll work on projects like building a recommendation system and predicting house prices."
        },
        {
            question: "Will I learn about deep learning in the ML course?",
            answer: "Yes, our advanced ML course covers deep learning concepts like CNNs and RNNs."
        },
        {
            question: "Is there mentorship for ML-related doubts?",
            answer: "Yes, we provide mentor support to guide you through challenging concepts and projects."
        },
        {
            question: "What tools will I learn in the ML course?",
            answer: "You’ll learn Python, Jupyter Notebooks, TensorFlow, and scikit-learn."
        },
        {
            question: "What will I learn in the Cloud Computing course?",
            answer: "You’ll learn about cloud fundamentals, services like AWS, Azure, and GCP, and deploying applications on the cloud."
        },
        {
            question: "Do I need prior knowledge of servers for the cloud course?",
            answer: "No, we start with the basics of cloud infrastructure and gradually move to advanced topics."
        },
        {
            question: "Will I learn about DevOps in this course?",
            answer: "Yes, the course covers DevOps tools like Docker and Kubernetes for deploying applications."
        },
        {
            question: "Does the cloud course include certifications like AWS or Azure?",
            answer: "We prepare you for certifications such as AWS Certified Solutions Architect and Microsoft Azure Fundamentals."
        },
        {
            question: "Can I access free cloud resources while learning?",
            answer: "Yes, we guide you on how to use free tiers on AWS, Azure, and GCP for hands-on learning."
        },
        {
            question: "Will I learn how to build and deploy websites in the cloud?",
            answer: "Absolutely! You’ll learn how to deploy full-stack applications and set up cloud infrastructure."
        },
        {
            question: "What is included in the Data Science course?",
            answer: "It includes Python programming, data visualization, statistics, machine learning, and big data tools."
        },
        {
            question: "Do I need to know programming for the Data Science course?",
            answer: "No, we teach Python programming as part of the course, starting from the basics."
        },
        {
            question: "Are there any projects in the Data Science course?",
            answer: "Yes, you’ll work on projects like analyzing customer data, building predictive models, and visualizing data."
        },
        {
            question: "Will I learn SQL in the Data Science course?",
            answer: "Yes, SQL is an essential part of our curriculum for working with databases."
        },
        {
            question: "Does the course cover big data tools like Hadoop or Spark?",
            answer: "Yes, the advanced modules cover Hadoop, Spark, and their applications in Data Science."
        },
        {
            question: "Can this course help me get a Data Science job?",
            answer: "Yes! Our course prepares you with industry-relevant skills and projects to make your portfolio stand out."
        },
        {
            question: "What is the syllabus for the Data Science Foundation course?",
            answer: "Data Science course Modules: 1. Foundation for Data Science, 2. Probability & Statistics, 3. Python Basics & Data Structures, 4. Control Flow & Functions, 5. Data Analysis with Pandas, 6. Data Visualization, 7. Machine Learning Basics, 8. Advanced Modeling & Forecasting."
        },
        {
            question: "What is the syllabus for the AWS Course?",
            answer: "AWS Course Modules: 1. Introduction to Cloud Computing & AWS, 2. Elastic Compute and Storage Volumes, 3. Load Balancing, Autoscaling, and DNS, 4. Virtual Private Cloud (VPC), 5. Storage - Simple Storage Service (S3), 6. Databases and In-Memory Datastores, 7. Access Management and Monitoring Services."
        },
        {
            question: "What is the syllabus for Azure AI course?",
            answer: "Azure AI Course Module: 1. Introduction to AI, 2. Machine Learning, 3. Anomaly Detection, 4. Computer Vision, 5. Natural Language Processing (NLP), 6. Data Mining and Challenges with AI, 7. Understanding Responsible AI."
        },
        {
            question: "What is the syllabus for Big Data Course?",
            answer: "Big Data Course Modules: 1. Introduction to Big Data and Hadoop, 2. HDFS (Hadoop Distributed File System), 3. MapReduce, 4. Advanced MapReduce Programming, 5. Hadoop Administration (Developer-Level Information), 6. HBase, 7. Hive, 8. Other Hadoop Ecosystems (Pig, Sqoop, Flume, Oozie, Ambari)."
        },
        {
            question: "What is the syllabus for Ethical Hacking Course?",
            answer: "Ethical Hacking Course Modules: 1. Introduction to Ethical Hacking, 2. Footprinting and Reconnaissance, 3. Scanning Networks, 4. Enumeration, 5. Vulnerability Analysis, 6. System Hacking, 7. Malware Threats, 8. Sniffing, 9. Social Engineering, 10. Denial-of-Service, 11. Session Hijacking, 12. Evading IDS, Firewalls, and Honeypots, 13. Hacking Web Servers, 14. Hacking Web Applications, 15. SQL Injection, 16. Hacking Wireless Networks, 17. Hacking Mobile Platforms, 18. IoT and OT Hacking, 19. Cloud Computing, 20. Cryptography."
        },
        {
            question: "What is the syllabus for Cyber Security Course?",
            answer: "Cyber Security Course Modules: 1. Introduction to Ethical Hacking, 2. Footprinting and Reconnaissance, 3. Scanning Networks, 4. Enumeration, 5. Vulnerability Analysis, 6. System Hacking, 7. Malware Threats, 8. Sniffing, 9. Social Engineering, 10. Denial-of-Service, 11. Session Hijacking, 12. Evading IDS, Firewalls, and Honeypots, 13. Hacking Web Servers, 14. Hacking Web Applications, 15. SQL Injection, 16. Hacking Wireless Networks, 17. Hacking Mobile Platforms, 18. IoT and OT Hacking, 19. Cloud Computing, 20. Cryptography."
        },
        {
            question: "What is the syllabus for Python Course?",
            answer: "Python Course Modules: 1. Python Basics, 2. Python Data Structures, 3. Python Functions, 4. Python Advanced Concepts, 5. Object-Oriented Programming in Python, 6. File Handling, 7. Python Modules, Packages, and Error Handling, 8. Advanced Python Collections, 9. SQL Database Access, 10. GUI Programming with Python, 11. Python for Network Programming, 12. Date and Time Handling, 13. Regular Expressions in Python, 14. Multithreading in Python."
        },
        {
            question: "What is the syllabus for Java Course?",
            answer: "Java Course Modules: 1. Introduction, 2. Java Programming Environment, 3. Fundamentals of Java Programming, 4. Control Structures, 5. Input and Output Fundamentals, 6. OOPS, 7. Command-Line Arguments, 8. Exception Handling, 9. Multithreading, 10. Inheritance, 11. Abstract Classes and Inheritance, 12. Polymorphism, 13. Package, 14. Garbage Collection."
        },
        {
            question: "Give brief about the Practice lab?",
            answer: "1. We build your lab to practice for exams. 2. 24*7 site engineer, 150 MBPS Internet, licensed software. 3. Labs supported for exams on Technologies."
        },
        {
            question: "What is the syllabus for VMware Course?",
            answer: "VMware Course Modules: 1. Introduction, 2. vCenter Server 7.0, 3. vSphere 7.0 Lifecycle Management, 4. vSphere with Operations Management 7.0, 5. vSphere 7.0 Developer and Automation Interfaces."
        },
        {
            question: "What is the syllabus for Kubernetes Course?",
            answer: "Kubernetes Course Modules: 1. Core Concepts, 2. Scheduling Pods, 3. Logging and Monitoring, 4. Application Lifecycle Management, 5. Cluster Management, 6. Security & Authentication, 7. Storage & Volumes, 8. DNS Networking, CoreDNS & CNI, 9. Troubleshooting-Application Failures."
        },
        {
            question: "What is the syllabus for Digital Marketing Course?",
            answer: "Digital Marketing Course Modules: 1. Introduction to Digital Marketing, 2. Email Marketing, 3. Search Engine Marketing - I, 4. Search Engine Marketing - II, 5. Social Media Marketing - I, 6. Social Media Marketing - II, 7. Search Engine Optimization - I, 8. Search Engine Optimization - II, 9. Google Analytics."
        },
        {
            question: "What is Google Cloud Platform?",
            answer: "A suite of cloud computing services offered by Google, including storage, compute, machine learning, and analytics tools."
        },
        {
            question: "What is an Azure Administrator?",
            answer: "A professional responsible for managing and monitoring Microsoft Azure services, including configuring virtual networks, managing storage, and ensuring security."
        },
        {
            question: "What is an AWS Solution Architect?",
            answer: "A professional who designs and deploys scalable, cost-effective, and secure applications on Amazon Web Services (AWS)."
        },
        {
            question: "What is DevOps?",
            answer: "A set of practices combining software development (Dev) and IT operations (Ops) to improve collaboration, automate workflows, and deliver applications faster."
        },
        {
            question: "What is AWS DevOps?",
            answer: "A combination of AWS tools and DevOps practices to automate and streamline the software development lifecycle on AWS."
        },
        {
            question: "What is Azure DevOps?",
            answer: "A suite of development tools by Microsoft Azure for CI/CD, project management, and version control."
        },
        {
            question: "What is Machine Learning?",
            answer: "A subset of artificial intelligence (AI) that enables systems to learn from data and improve their performance without explicit programming."
        },
        {
            question: "What is Data Science?",
            answer: "The field of extracting insights and knowledge from structured and unstructured data using statistics, machine learning, and data visualization."
        },
        {
            question: "What is Azure AI?",
            answer: "A set of artificial intelligence tools and services provided by Microsoft Azure, including machine learning, natural language processing, and cognitive services."
        },
        {
            question: "What is Big Data?",
            answer: "Large and complex datasets that require advanced tools and techniques for storage, processing, and analysis."
        },
        {
            question: "What is Cybersecurity?",
            answer: "The practice of protecting systems, networks, and data from digital attacks, theft, and damage."
        },
        {
            question: "What is Kubernetes?",
            answer: "An open-source platform for automating the deployment, scaling, and management of containerized applications."
        },
        {
            question: "What is VMware?",
            answer: "A company that provides virtualization and cloud computing software, enabling multiple virtual machines to run on a single physical server."
        },
        {
            question: "What is Full Stack Development?",
            answer: "The process of developing both the front-end (user interface) and back-end (server, database) of web applications."
        },
        {
            question: "What is Ethical Hacking?",
            answer: "The practice of legally testing and identifying vulnerabilities in systems to improve their security."
        },
        {
            question: "What is Robotics?",
            answer: "The field of designing, building, and programming robots to perform tasks traditionally done by humans."
        },
        {
            question: "What is Linux?",
            answer: "An open-source operating system widely used for servers, desktops, and embedded systems."
        },
        {
            question: "What is Digital Marketing?",
            answer: "The promotion of products or services using digital channels such as social media, search engines, and email."
        }
    ];

    // Toggle chatbox visibility
    chatboxButton.addEventListener('click', function () {
        chatboxSupport.classList.toggle('chatbox--active');
    });

    // Send message on button click
    sendButton.addEventListener('click', function () {
        performSearch();
    });

    // Send message on Enter key press
    chatboxInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Function to perform search
    function performSearch() {
        const query = chatboxInput.value.trim();
        if (query) {
            // Display user's query
            displayMessage(`You searched for: "${query}"`, 'visitor');

            // Split the query into keywords
            const keywords = query.toLowerCase().split(" ");

            // Search for matching results based on keywords
            const results = searchData.filter(item =>
                keywords.some(keyword =>
                    item.question.toLowerCase().includes(keyword)
                )
            );

            if (results.length > 0) {
                // Display search results
                displaySearchResults(results);
            } else {
                // No results found
                displayMessage("No results found. Please try another query.", 'operator');
            }

            // Clear the input field
            chatboxInput.value = '';
        }
    }

    // Function to display search results
    function displaySearchResults(results) {
        results.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.textContent = item.question;
            resultElement.classList.add('messages__item', 'messages__item--question');
            resultElement.addEventListener('click', () => {
                displayMessage(item.answer, 'operator');
            });
            chatboxMessages.appendChild(resultElement);
        });

        // Scroll to the bottom of the chatbox
        chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
    }

    // Function to display messages in the chatbox
    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('messages__item', `messages__item--${sender}`);
        chatboxMessages.appendChild(messageElement);

        // Scroll to the bottom of the chatbox
        chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
    }
});