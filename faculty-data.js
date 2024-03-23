const facultyData = [
    {
        name: "Puja Banerjee",
        age: 25,
        education: "B.Sc in Zoology(Honours) from WBSU",
        subject: "Science faculty of GANiT from class V to VIII and Biology faculty from IX to XII"
    },
    {
        name: "Sarthak Biswas",
        age: 22,
        education: "B.Sc in Computer Science(Honours) from University of Burdwan and pursuing M.Sc in same stream from Calcutta University",
        subject: "Computer Faculty of GANiT"
    },
    {
        name: "Moumita Dutta",
        age: 24,
        education: "B.Sc and M.Sc from WBSU in Chemistry(Honours)",
        subject: "Science faculty from class VII to X and Chemistry faculty of XI and XII"
    },
    {
        name: "Debadreeta Ghosh",
        age: 20,
        education: "Pursuing BA in English(Honours) from University of Kalyani",
        subject: "English faculty of GANiT"
    },
    {
        name: "Diptesh Bramha",
        age: 27,
        education: "B-Tech in Electrical Engineering from Ideal Institute of Engineering, Kalyani, M-Tech in Power System Engineering from MAKAUT",
        subject: "Physics faculty of GANiT The Assurance from VI to X ICSE, CBSE and XI-XII WBBSE, ISC, CBSE"
    },
    {
        name: "Manoj Sir",
        age: 49,
        education: "M.Sc in Applied Mathematics from Calcutta University, 1st class",
        subject: "Founder Teacher of GANiT The Assistance,20+ years teaching Mathematics at 10+2 level, specializing in WBJEE, JEE MAINS, and JEE ADVANCED(IIT) mentoring."
    }
];

    
        // Function to create and populate flip-card elements
        function createFacultyCards() {
            const facultyContainer = document.querySelector('.faculty-container1');
            facultyData.forEach((faculty, index) => {
                const flipCard = document.createElement('div');
                flipCard.classList.add('flip-card');

                const flipCardInner = document.createElement('div');
                flipCardInner.classList.add('flip-card-inner');

                const flipCardFront = document.createElement('div');
                flipCardFront.classList.add('flip-card-front');

                const img = document.createElement('img');
                img.src = `faculty\\faculty${index + 1}.jpg`; // Assuming images are named faculty1.png, faculty2.png, ...
                img.alt = "Avatar";
                img.style.width = "250px";
                img.style.height = "300px";

                flipCardFront.appendChild(img);

                const flipCardBack = document.createElement('div');
                flipCardBack.classList.add('flip-card-back');

                const h1 = document.createElement('h2');
                h1.innerText = faculty.name;

                const pAge = document.createElement('p');
                pAge.innerText = `Age: ${faculty.age}`;

                const pEducation = document.createElement('p');
                pEducation.innerText = `Education: ${faculty.education}`;

                const pSubject = document.createElement('p');
                pSubject.innerText = `Subject: ${faculty.subject}`;

                flipCardBack.appendChild(h1);
                flipCardBack.appendChild(pAge);
                flipCardBack.appendChild(pEducation);
                flipCardBack.appendChild(pSubject);

                flipCardInner.appendChild(flipCardFront);
                flipCardInner.appendChild(flipCardBack);

                flipCard.appendChild(flipCardInner);

                facultyContainer.appendChild(flipCard);
            });
        }

        // Call function to create and populate flip-card elements
        createFacultyCards();