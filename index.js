document.addEventListener('DOMContentLoaded', function () {
    const chatboxInput = document.getElementById('chatbox__input');
    const sendButton = document.getElementById('send__button');
    const chatboxMessages = document.querySelector('.chatbox__messages');
    const chatboxSupport = document.querySelector('.chatbox__support');
    const chatboxButton = document.querySelector('.chatbox__button button');
    const suggestionsBox = document.getElementById('suggestions');
    let selectedIndex = -1;

    const responses = {
        "hello": "Hi there! How can I help you?",
        "hi": "Hello! How can I assist you?",
        "how are you": "I'm just a bot, but I'm here to assist you!",
        "what is your name": "I'm your Study Assistant.",
        "What courses are available on your website?": "Loads of awesome courses like Cloud Computing, Machine Learning, Cyber Security, Python, Java, and even Digital Marketing!",
        "How can I enroll in a course?": "Click on the course, register, enter your details, and our team will contact you.",
        "Do you offer certification for completed courses?": "Yeah, we provide certifications for all courses.",
        "What if I have doubts while learning?": "Our platform provides a Q&A forum, live chat support, and expert mentorship for resolving doubts.",
        "Can I retake a course if I fail?": "Yes, you can retake the exam until you pass.",
        "Will I get hands-on experience during the course?": "Yes, you will work on a real-world project to apply your learning. This ensures hands-on experience with practical implementation.",
        "How advanced are the courses?": "All the hot technologies - cloud, AI, programming, cybersecurity. We cover everything!",
        "Are the courses self-paced or instructor-led?": "A combination of self-paced and instructor-led learning will lead to a balanced approach for mastering concepts.",
        "Can I get a mentor to guide me through the course?": "Yes, you’ll get a mentor with industry experience to guide you.",
        "What happens if I miss a live session?": "When you miss a class, a recorded session will be forwarded to you for review.",
        "Can I add the course certificate to my LinkedIn profile?": "Yes, certificates are shareable on all platforms, including LinkedIn.",
        "Is there any live session in the course?": "We have maximum live sessions for real interactive learning and to clear any doubts.",
        "Are the courses available in multiple languages?": "Yes, we offer multiple languages based on your needs.",
        "Do you provide quizzes or exams in the course?": "We provide exams and quizzes to monitor your progress and performance.",
        "Do you offer weekend-only courses?": "We generally conduct sessions on weekends to balance professional life.",
        "Can I pay for courses in installments?": "Yes, you can pay for courses in installments for enhanced learning.",
        "Can you recommend a course for building a portfolio?": "Yes, you can update your portfolio with the projects and skills gained.",
        "Which is the cheapest course you are providing?": "All the courses are the cheapest compared to other institutions.",
        "Are there prerequisites for enrolling in certain courses?": "Not at all! Our courses provide foundational content to help anyone, regardless of experience.",
        "Can I customize a course based on my needs?": "Yes, we customize the course based on your learning goals and career needs.",
        "Do your courses include real-world projects?": "We issue a professionally designed project based on real-world scenarios and case studies.",
        "Are there regular assessments or tests?": "Assessments and tests are conducted to monitor your progress and understanding.",
        "Can I skip lessons if I already know the topic?": "We teach the depth of the concepts with examples, so it's better to attend even if you know the topic.",
        "Do your courses have partnerships with tech companies?": "No, we don't have any partnership with tech companies.",
        "Are job placement services provided after course completion?": "Yes, we train you for placements to ensure a job in the IT industry.",
        "Are there options for one-on-one mentorship?": "Yes, you receive 1-to-1 mentorship with our industry expert.",
        "Do you provide a roadmap for DevOps mastery?": "Yes, we provide a roadmap at the introduction of our class to guide your learning journey.",
        "Do you provide a roadmap for Cloud Computing?": "Yes, we provide a roadmap at the introduction of our class to guide your learning journey.",
        "What job roles can I apply for after completing Cloud Computing?": "Job roles in cloud computing include Cloud Architect, Engineer, Developer, and Security Specialist. Other roles include Cloud Consultant, Systems Administrator, and Cloud Operations Manager.",
        "What job roles can I apply for after completing Data Science?": "Job roles in data science include Data Scientist, Data Analyst, Machine Learning Engineer, and more. These roles focus on analyzing data, building models, and providing actionable insights for decision-making.",
        "What job roles can I apply for after completing DevOps?": "Job roles for DevOps include DevOps Engineer, responsible for automating and optimizing processes, and Site Reliability Engineer (SRE), ensuring system reliability. Other roles include Automation Engineer, Cloud Engineer, Build and Release Engineer, and Infrastructure Engineer.",
        "What job roles can I apply for after completing Machine Learning?": "Job roles for ML include Machine Learning Engineer, who builds and deploys models, and Data Scientist, who analyzes data to derive insights. Other roles include AI Researcher, Deep Learning Engineer, and Data Engineer.",
        "What job roles can I apply for after completing Cybersecurity?": "Job roles for Cybersecurity include Security Analyst, responsible for protecting systems from threats, and Security Engineer, who designs secure networks. Other roles include Penetration Tester, Security Architect, and Incident Responder.",
        "Do you teach resume-building and interview preparation?": "Yes, we assist with resume building and interview preparation to enhance your chances of landing a job in the IT industry.",
        "Are there any live coding sessions?": "Yes, we conduct live coding sessions in programming courses for practical experience and real-time feedback.",
        "Do you use AI tools to enhance learning?": "Yes, we use AI tools to enhance learning and train you for better and faster work in the industry.",
        "Are there case studies included in the courses?": "Yes, there are case studies to help you apply theoretical knowledge to real-world scenarios.",
        "How can I access the courses?": "Simply sign up on our platform, choose your course, and start learning immediately.",
        "What exactly does Cloud4Green do?": "We help students learn cool tech stuff like cloud computing, coding, and digital skills with super practical training.",
        "What courses can I study here?": "Loads of awesome courses like Cloud Computing, Machine Learning, Cyber Security, Python, Java, and even Digital Marketing!",
        "How long will the course take?": "Just one month - 32 hours of intense learning. Perfect for students who want quick, powerful skills.",
        "Which certification exams can I prepare for?": "Microsoft, AWS, Azure, Google Cloud, Linux, VMware - basically all the big tech certifications!",
        "What's the internet speed in labs?": "Blazing fast 150 MBPS. No buffering, no waiting!",
        "Do I need to buy expensive software?": "Nope! We provide all licensed software. Everything's included in your course.",
        "What if I get stuck with something?": "We've got 24/7 engineer support. Help is always just a call away!",
        "Why should I choose Cloud4Green?": "We make learning easy, practical, and job-ready. No boring theoretical stuff.",
        "How are the courses structured?": "Totally hands-on! Real projects, industry scenarios, practical skills.",
        "Are the lab facilities good?": "World-class! We simulate real work environments so you learn exactly what companies need.",
        "Can I manage studies with work?": "Totally! We offer flexible online and offline classes.",
        "Do I need prior knowledge?": "Some courses need basics, some are for complete beginners. We've got something for everyone!",
        "How updated are the courses?": "Super updated! We refresh content regularly to match industry trends.",
        "Which technologies will I learn?": "All the hot technologies - cloud, AI, programming, cybersecurity. We cover everything!",
        "How will I actually learn?": "By doing! Projects, case studies, real-world simulations.",
        "What platforms do you support?": "Every possible platform - Windows, Linux, Mac, cloud platforms - you name it!",
        "Is my data safe?": "100% secure. We have top-notch security and disaster recovery plans.",
        "What makes you different from other institutes?": "We focus on skills, not just certificates. Practical learning is our mantra!",
        "Can international students join?": "Absolutely! Flexible learning for everyone, anywhere.",
        "How will my progress be checked?": "Through real projects, practical exams, and skill demonstrations.",
        "What after completing the course?": "Continuous learning programs, advanced modules to keep upgrading your skills.",
        "Why should a student trust Cloud4Green?": "Industry-aligned curriculum, expert trainers, guaranteed skill development.",
        "How comprehensive are the evaluations?": "We check everything - your projects, practical skills, real understanding.",
        "What infrastructure services do you offer?": "Yes! Virtual machines, cloud resources available on rental.",
        "Is learning a one-time thing here?": "No way! We believe in continuous learning and skill enhancement.",
        "Do you support students globally?": "24/7 support across different time zones. We're always here!",
        "How do I get in touch?": "Just visit our website or drop us a message. We'll get back quickly!",
        "What are the key benefits of Cloud4Green's infrastructure?": "Cost reduction, global support, optimized performance, automated lifecycle management.",
        "What makes the practice labs unique?": "Real-world simulation environments, professional-grade infrastructure, exam preparation focus.",
        "What career support services are provided?": "Job placement assistance, resume workshops, interview preparation.",
        "How frequently is course content updated?": "Regular curriculum revisions to align with latest technological trends.",
        "What are the key strategic benefits?": "Cost optimization, technological adaptability, standardized processes.",
        "What assessment methods are used?": "Continuous assessment, project evaluations, practical examinations.",
        "Are there rental services available?": "Yes, including cloud computing resources, virtual machine rentals.",
        "How can interested individuals contact Cloud4Green Technologies?": "Direct contact through their website or customer service channels.",
        "Are the courses beginner-friendly?": "Yes! We have beginner-friendly courses with step-by-step guidance to help you start learning from scratch.",
        "Do I need prior experience to enroll in these courses?": "Not at all! Our courses provide foundational content to help anyone, regardless of experience.",
        "Can I download the course content?": "Yes, video lectures and notes can be downloaded for offline learning.",
        "Are the courses self-paced?": "Yes, all our courses are self-paced, so you can learn at your convenience.",
        "Is there any trial period or free content?": "Yes, we offer free introductory modules for all our courses.",
        "What topics are covered in the Machine Learning course?": "Topics include supervised and unsupervised learning, neural networks, decision trees, and hands-on projects.",
        "Does the ML course include Python tutorials?": "Yes! Python basics and libraries like NumPy, pandas, and scikit-learn are covered.",
        "Are there real-world projects in the ML course?": "Absolutely! You’ll work on projects like building a recommendation system and predicting house prices.",
        "Will I learn about deep learning in the ML course?": "Yes, our advanced ML course covers deep learning concepts like CNNs and RNNs.",
        "Is there mentorship for ML-related doubts?": "Yes, we provide mentor support to guide you through challenging concepts and projects.",
        "What tools will I learn in the ML course?": "You’ll learn Python, Jupyter Notebooks, TensorFlow, and scikit-learn.",
        "What will I learn in the Cloud Computing course?": "You’ll learn about cloud fundamentals, services like AWS, Azure, and GCP, and deploying applications on the cloud.",
        "Do I need prior knowledge of servers for the cloud course?": "No, we start with the basics of cloud infrastructure and gradually move to advanced topics.",
        "Will I learn about DevOps in this course?": "Yes, the course covers DevOps tools like Docker and Kubernetes for deploying applications.",
        "Does the cloud course include certifications like AWS or Azure?": "We prepare you for certifications such as AWS Certified Solutions Architect and Microsoft Azure Fundamentals.",
        "Can I access free cloud resources while learning?": "Yes, we guide you on how to use free tiers on AWS, Azure, and GCP for hands-on learning.",
        "Will I learn how to build and deploy websites in the cloud?": "Absolutely! You’ll learn how to deploy full-stack applications and set up cloud infrastructure.",
        "What is included in the Data Science course?": "It includes Python programming, data visualization, statistics, machine learning, and big data tools.",
        "Do I need to know programming for the Data Science course?": "No, we teach Python programming as part of the course, starting from the basics.",
        "Are there any projects in the Data Science course?": "Yes, you’ll work on projects like analyzing customer data, building predictive models, and visualizing data.",
        "Will I learn SQL in the Data Science course?": "Yes, SQL is an essential part of our curriculum for working with databases.",
        "Does the course cover big data tools like Hadoop or Spark?": "Yes, the advanced modules cover Hadoop, Spark, and their applications in Data Science.",
        "Can this course help me get a Data Science job?": "Yes! Our course prepares you with industry-relevant skills and projects to make your portfolio stand out.",
        "What is the syllabus for Data Science Foundation course?": "Data Science course Modules: 1. Foundation for Data Science, 2. Probability & Statistics, 3. Python Basics & Data Structures, 4. Control Flow & Functions, 5. Data Analysis with Pandas, 6. Data Visualization, 7. Machine Learning Basics, 8. Advanced Modeling & Forecasting.",
        "What is the syllabus for  AWS Course?": "AWS Course Modules: 1. Introduction to Cloud Computing & AWS, 2. Elastic Compute and Storage Volumes, 3. Load Balancing, Autoscaling, and DNS, 4. Virtual Private Cloud (VPC), 5. Storage - Simple Storage Service (S3), 6. Databases and In-Memory Datastores, 7. Access Management and Monitoring Services.",
        "What is the syllabus for Azure AI course?": "Azure AI Course Module: 1. Introduction to AI, 2. Machine Learning, 3. Anomaly Detection, 4. Computer Vision, 5. Natural Language Processing (NLP), 6. Data Mining and Challenges with AI, 7. Understanding Responsible AI.",
        "What is the syllabus for Big Data Course?": "Big Data Course Modules: 1. Introduction to Big Data and Hadoop, 2. HDFS (Hadoop Distributed File System), 3. MapReduce, 4. Advanced MapReduce Programming, 5. Hadoop Administration (Developer-Level Information), 6. HBase, 7. Hive, 8. Other Hadoop Ecosystems (Pig, Sqoop, Flume, Oozie, Ambari).",
        "What is the syllabus for Ethical Hacking Course?": "Ethical Hacking Course Modules: 1. Introduction to Ethical Hacking, 2. Footprinting and Reconnaissance, 3. Scanning Networks, 4. Enumeration, 5. Vulnerability Analysis, 6. System Hacking, 7. Malware Threats, 8. Sniffing, 9. Social Engineering, 10. Denial-of-Service, 11. Session Hijacking, 12. Evading IDS, Firewalls, and Honeypots, 13. Hacking Web Servers, 14. Hacking Web Applications, 15. SQL Injection, 16. Hacking Wireless Networks, 17. Hacking Mobile Platforms, 18. IoT and OT Hacking, 19. Cloud Computing, 20. Cryptography.",
        "What is the syllabus for Cyber Security Course?": "Cyber Security Course Modules: 1. Introduction to Ethical Hacking, 2. Footprinting and Reconnaissance, 3. Scanning Networks, 4. Enumeration, 5. Vulnerability Analysis, 6. System Hacking, 7. Malware Threats, 8. Sniffing, 9. Social Engineering, 10. Denial-of-Service, 11. Session Hijacking, 12. Evading IDS, Firewalls, and Honeypots, 13. Hacking Web Servers, 14. Hacking Web Applications, 15. SQL Injection, 16. Hacking Wireless Networks, 17. Hacking Mobile Platforms, 18. IoT and OT Hacking, 19. Cloud Computing, 20. Cryptography.",
        "What is the syllabus for Python Course?": "Python Course Modules: 1. Python Basics, 2. Python Data Structures, 3. Python Functions, 4. Python Advanced Concepts, 5. Object-Oriented Programming in Python, 6. File Handling, 7. Python Modules, Packages, and Error Handling, 8. Advanced Python Collections, 9. SQL Database Access, 10. GUI Programming with Python, 11. Python for Network Programming, 12. Date and Time Handling, 13. Regular Expressions in Python, 14. Multithreading in Python.",
        "What is the syllabus for Java Course?": "Java Course Modules: 1. Introduction, 2. Java Programming Environment, 3. Fundamentals of Java Programming, 4. Control Structures, 5. Input and Output Fundamentals, 6. OOPS, 7. Command-Line Arguments, 8. Exception Handling, 9. Multithreading, 10. Inheritance, 11. Abstract Classes and Inheritance, 12. Polymorphism, 13. Package, 14. Garbage Collection.",
        "Give brief about the Practice lab?": "1. We build your lab to practice for exams. 2. 24*7 site engineer, 150 MBPS Internet, licensed software. 3. Labs supported for exams on Technologies.",
        "What is the syllabus for VMware Course?": "VMware Course Modules: 1. Introduction, 2. vCenter Server 7.0, 3. vSphere 7.0 Lifecycle Management, 4. vSphere with Operations Management 7.0, 5. vSphere 7.0 Developer and Automation Interfaces.",
        "What is the syllabus for Kubernetes Course?": "Kubernetes Course Modules: 1. Core Concepts, 2. Scheduling Pods, 3. Logging and Monitoring, 4. Application Lifecycle Management, 5. Cluster Management, 6. Security & Authentication, 7. Storage & Volumes, 8. DNS Networking, CoreDNS & CNI, 9. Troubleshooting-Application Failures.",
        "What is the syllabus for Digital Marketing Course?": "Digital Marketing Course Modules: 1. Introduction to Digital Marketing, 2. Email Marketing, 3. Search Engine Marketing - I, 4. Search Engine Marketing - II, 5. Social Media Marketing - I, 6. Social Media Marketing - II, 7. Search Engine Optimization - I, 8. Search Engine Optimization - II, 9. Google Analytics.",
        "What is Google Cloud Platform?": "A suite of cloud computing services offered by Google, including storage, compute, machine learning, and analytics tools.",
        "What is an Azure Administrator?": "A professional responsible for managing and monitoring Microsoft Azure services, including configuring virtual networks, managing storage, and ensuring security.",
        "What is an AWS Solution Architect?": "A professional who designs and deploys scalable, cost-effective, and secure applications on Amazon Web Services (AWS).",
        "What is DevOps?": "A set of practices combining software development (Dev) and IT operations (Ops) to improve collaboration, automate workflows, and deliver applications faster.",
        "What is AWS DevOps?": "A combination of AWS tools and DevOps practices to automate and streamline the software development lifecycle on AWS.",
        "What is Azure DevOps?": "A suite of development tools by Microsoft Azure for CI/CD, project management, and version control.",
        "What is Machine Learning?": "A subset of artificial intelligence (AI) that enables systems to learn from data and improve their performance without explicit programming.",
        "What is Data Science?": "The field of extracting insights and knowledge from structured and unstructured data using statistics, machine learning, and data visualization.",
        "What is Azure AI?": "A set of artificial intelligence tools and services provided by Microsoft Azure, including machine learning, natural language processing, and cognitive services.",
        "What is Big Data?": "Large and complex datasets that require advanced tools and techniques for storage, processing, and analysis.",
        "What is Cybersecurity?": "The practice of protecting systems, networks, and data from digital attacks, theft, and damage.",
        "What is Kubernetes?": "An open-source platform for automating the deployment, scaling, and management of containerized applications.",
        "What is VMware?": "A company that provides virtualization and cloud computing software, enabling multiple virtual machines to run on a single physical server.",
        "What is Full Stack Development?": "The process of developing both the front-end (user interface) and back-end (server, database) of web applications.",
        "What is Ethical Hacking?": "The practice of legally testing and identifying vulnerabilities in systems to improve their security.",
        "What is Robotics?": "The field of designing, building, and programming robots to perform tasks traditionally done by humans.",
        "What is Linux?": "An open-source operating system widely used for servers, desktops, and embedded systems.",
        "What is Digital Marketing?": "The promotion of products or services using digital channels such as social media, search engines, and email."
    
    };

    chatboxButton.addEventListener('click', function () {
        chatboxSupport.classList.toggle('chatbox--active');
    });

    sendButton.addEventListener('click', function () {
        generateResponse();
    });

    chatboxInput.addEventListener('input', function () {
        showSuggestions();
    });

    chatboxInput.addEventListener('keydown', function (e) {
        const suggestions = document.querySelectorAll('.suggestion-item');
        if (e.key === 'ArrowDown' && suggestions.length > 0) {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % suggestions.length;
            updateSelection(suggestions);
        } else if (e.key === 'ArrowUp' && suggestions.length > 0) {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + suggestions.length) % suggestions.length;
            updateSelection(suggestions);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex >= 0) {
                chatboxInput.value = suggestions[selectedIndex].textContent;
                suggestionsBox.innerHTML = '';
                suggestionsBox.style.display = 'none';
            }
            generateResponse();
        }
    });

    function updateSelection(suggestions) {
        suggestions.forEach((item, index) => {
            item.classList.toggle('selected', index === selectedIndex);
            if (index === selectedIndex) {
                chatboxInput.value = item.textContent;
            }
        });
    }

    function showSuggestions() {
        const query = chatboxInput.value.trim().toLowerCase();
        suggestionsBox.innerHTML = '';
        suggestionsBox.style.display = 'none';
        selectedIndex = -1;

        if (query) {
            const suggestions = Object.keys(responses).filter(q => q.toLowerCase().includes(query));
            if (suggestions.length > 0) {
                suggestionsBox.style.display = 'block';
                suggestionsBox.style.opacity = '0.8';
                suggestions.forEach((suggestion, index) => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.textContent = suggestion;
                    suggestionItem.classList.add('suggestion-item');
                    suggestionItem.addEventListener('click', function () {
                        chatboxInput.value = suggestion;
                        suggestionsBox.innerHTML = '';
                        suggestionsBox.style.display = 'none';
                        generateResponse();
                    });
                    suggestionsBox.appendChild(suggestionItem);
                });
            }
        }
    }

    function generateResponse() {
        const query = chatboxInput.value.trim().toLowerCase();
        if (query) {
            displayMessage(`You: ${query}`, 'visitor');
            let response = findBestMatch(query) || "I'm here to assist you! Can you please provide more details?";
            displayMessage(response, 'operator');
            chatboxInput.value = '';
            suggestionsBox.innerHTML = '';
            suggestionsBox.style.display = 'none';
        }
    }

    function findBestMatch(input) {
        let bestMatch = null;
        let highestScore = 0;
        Object.keys(responses).forEach(question => {
            let score = similarity(input, question);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = responses[question];
            }
        });
        return highestScore > 0.5 ? bestMatch : null;
    }

    function similarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        const longerLength = longer.length;
        if (longerLength === 0) return 1.0;
        return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    function editDistance(str1, str2) {
        const matrix = [];
        for (let i = 0; i <= str1.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str2.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= str1.length; i++) {
            for (let j = 1; j <= str2.length; j++) {
                if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j - 1] + 1
                    );
                }
            }
        }
        return matrix[str1.length][str2.length];
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('messages__item', `messages__item--${sender}`);
        chatboxMessages.appendChild(messageElement);
        chatboxMessages.scrollTo({ top: chatboxMessages.scrollHeight, behavior: 'smooth' });
    }
});
