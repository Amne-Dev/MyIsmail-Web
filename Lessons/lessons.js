const subjectButtons = document.getElementById('subject-buttons');
const lessonButtons = document.getElementById('lesson-buttons');
const cardsContainer = document.getElementById('cards-container');

document.querySelectorAll('.subject-btn').forEach(button => {
    button.addEventListener('click', () => loadLessons(button.dataset.subject));
});

document.getElementById('switch-to-arabic').addEventListener('click', function() {
    document.documentElement.lang = 'ar';
    document.querySelectorAll('.subject-btn').forEach(button => {
        switch (button.dataset.subject) {
            case 'maths': button.innerText = 'الرياضيات'; break;
            case 'physics': button.innerText = 'الفيزياء'; break;
            case 'engineering': button.innerText = 'الهندسة'; break;
            case 'biology': button.innerText = 'علم الأحياء'; break;
            case 'english': button.innerText = 'الإنجليزية'; break;
            case 'french': button.innerText = 'الفرنسية'; break;
            case 'arabic': button.innerText = 'العربية'; break;
            case 'philosophy': button.innerText = 'الفلسفة'; break;
            case 'islamic-education': button.innerText = 'التربية الإسلامية'; break;
            case 'other': button.innerText = 'أخرى'; break;
        }
    });
    document.querySelectorAll('.languageDropdown').forEach(button => button.innerText = 'Ar');
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('sidebar-arabic').style.display = 'flex';
});

document.getElementById('switch-to-english').addEventListener('click', function() {
    document.documentElement.lang = 'en';
    document.querySelectorAll('.subject-btn').forEach(button => {
        switch (button.dataset.subject) {
            case 'maths': button.innerText = 'Maths'; break;
            case 'physics': button.innerText = 'Physics'; break;
            case 'engineering': button.innerText = 'Engineering'; break;
            case 'biology': button.innerText = 'Biology'; break;
            case 'english': button.innerText = 'English'; break;
            case 'french': button.innerText = 'French'; break;
            case 'arabic': button.innerText = 'Arabic'; break;
            case 'philosophy': button.innerText = 'Philosophy'; break;
            case 'islamic-education': button.innerText = 'Islamic Education'; break;
            case 'other': button.innerText = 'Other'; break;
        }
    });
    document.querySelectorAll('.languageDropdown').forEach(button => button.innerText = 'En');
    document.getElementById('sidebar').style.display = 'flex';
    document.getElementById('sidebar-arabic').style.display = 'none';
});

document.getElementById('switch-to-arabic-ar').addEventListener('click', function() {
    document.getElementById('switch-to-arabic').click();
});

document.getElementById('switch-to-english-ar').addEventListener('click', function() {
    document.getElementById('switch-to-english').click();
});

function loadLessons(subject) {
    lessonButtons.innerHTML = ''; // Clear previous lesson buttons
    const lessons = getLessonsForSubject(subject);
    lessons.forEach(lesson => {
        const button = document.createElement('button');
        button.className = 'btn btn-primary lesson-btn';
        button.style = 'flex: 1; height: 10vh; font-size: 1.5rem;';
        button.innerText = lesson.title;
        button.addEventListener('click', () => loadLessonCards(lesson));
        lessonButtons.appendChild(button);
    });

    subjectButtons.style.display = 'none';
    lessonButtons.style.display = 'flex';
}

function loadLessonCards(lesson) {
    cardsContainer.innerHTML = ''; // Clear previous cards
    lesson.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'list-group-item';
        cardElement.style = 'background-color: var(--bg-sec); color: var(--text-sec); margin-bottom: 1rem; border-radius: 10px; padding: 1.5rem;';
        cardElement.innerHTML = `
            <div class="d-flex align-items-center">
                <div>
                    <h5 style="color: var(--text-main);">${card.title}</h5>
                    <p style="color: var(--text-sec);">Teacher: ${card.teacher}</p>
                    <a href="${card.link}" class="btn btn-primary" download>Download</a>
                </div>
            </div>
        `;
        cardsContainer.appendChild(cardElement);
    });

    lessonButtons.style.display = 'none';
    cardsContainer.style.display = 'block';
}

function getLessonsForSubject(subject) {
    // Replace this with actual data fetching logic
    return [
        {
            title: `${subject} Lesson 1`,
            cards: [
                { title: `${subject} Lesson 1 - Card 1`, teacher: 'Teacher A', link: '#' },
                { title: `${subject} Lesson 1 - Card 2`, teacher: 'Teacher B', link: '#' }
            ]
        },
        {
            title: `${subject} Lesson 2`,
            cards: [
                { title: `${subject} Lesson 2 - Card 1`, teacher: 'Teacher C', link: '#' },
                { title: `${subject} Lesson 2 - Card 2`, teacher: 'Teacher D', link: '#' }
            ]
        }
    ];
}

function goBack() {
    if (cardsContainer.style.display === 'block') {
        cardsContainer.style.display = 'none';
        lessonButtons.style.display = 'flex';
    } else if (lessonButtons.style.display === 'flex') {
        lessonButtons.style.display = 'none';
        subjectButtons.style.display = 'flex';
    } else {
        window.history.back();
    }
}