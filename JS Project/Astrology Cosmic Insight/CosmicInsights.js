// Document ready function - Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function - Sets up form functionality
function initializeApp() {
    populateTimeSelectors();
    setupFormSubmission();
}

// Populate hour and minute dropdown selectors
function populateTimeSelectors() {
    const hourSelect = document.getElementById('birth-hour');
    const minuteSelect = document.getElementById('birth-minute');
    
    // Populate hours (0-23)
    for (let hour = 0; hour < 24; hour++) {
        const option = document.createElement('option');
        option.value = hour;
        option.textContent = hour.toString().padStart(2, '0');
        hourSelect.appendChild(option);
    }
    
    // Populate minutes (0-59)
    for (let minute = 0; minute < 60; minute++) {
        const option = document.createElement('option');
        option.value = minute;
        option.textContent = minute.toString().padStart(2, '0');
        minuteSelect.appendChild(option);
    }
}

// Setup form submission handling
function setupFormSubmission() {
    const form = document.getElementById('birth-chart-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        handleBirthChartSubmission();
    });
}



// Handle birth chart form submission and generate results
function handleBirthChartSubmission() {
    // Get form data
    const formData = collectFormData();
    
    // // Validate form data
    // if (!validateFormData(formData)) {
    //     alert('Please fill in all required fields.');
    //     return;
    // }
    
    // Calculate zodiac sign based on birth date
    const zodiacSign = calculateZodiacSign(formData.month, formData.date);
    
    // Generate and display results
    displayBirthChartResults(formData, zodiacSign);
    
    // Show results section
    document.getElementById('results-section').style.display = 'block';
    
    // Scroll to results section smoothly
    document.getElementById('results-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


// Collect all form data into an object
function collectFormData() {
    return {
        firstName: document.getElementById('first-name').value.trim(),
        lastName: document.getElementById('last-name').value.trim(),
        location: document.getElementById('birth-location').value.trim(),
        date: parseInt(document.getElementById('birth-date').value),
        month: parseInt(document.getElementById('birth-month').value),
        year: parseInt(document.getElementById('birth-year').value),
        hour: parseInt(document.getElementById('birth-hour').value),
        minute: parseInt(document.getElementById('birth-minute').value)
    };
}

// Validate that all required form fields are filled
function validateFormData(data) {
    return data.firstName && data.lastName && data.location && 
           data.date && data.month && data.year && 
           data.hour !== undefined && data.minute !== undefined;
}

// Calculate zodiac sign based on birth month and date
function calculateZodiacSign(month, date) {
    // Zodiac date ranges for calculation
    const zodiacRanges = [
        { sign: 'capricorn', startMonth: 12, startDate: 22, endMonth: 1, endDate: 19 },
        { sign: 'aquarius', startMonth: 1, startDate: 20, endMonth: 2, endDate: 18 },
        { sign: 'pisces', startMonth: 2, startDate: 19, endMonth: 3, endDate: 20 },
        { sign: 'aries', startMonth: 3, startDate: 21, endMonth: 4, endDate: 19 },
        { sign: 'taurus', startMonth: 4, startDate: 20, endMonth: 5, endDate: 20 },
        { sign: 'gemini', startMonth: 5, startDate: 21, endMonth: 6, endDate: 20 },
        { sign: 'cancer', startMonth: 6, startDate: 21, endMonth: 7, endDate: 22 },
        { sign: 'leo', startMonth: 7, startDate: 23, endMonth: 8, endDate: 22 },
        { sign: 'virgo', startMonth: 8, startDate: 23, endMonth: 9, endDate: 22 },
        { sign: 'libra', startMonth: 9, startDate: 23, endMonth: 10, endDate: 22 },
        { sign: 'scorpio', startMonth: 10, startDate: 23, endMonth: 11, endDate: 21 },
        { sign: 'sagittarius', startMonth: 11, startDate: 22, endMonth: 12, endDate: 21 }
    ];
    
    // Find matching zodiac sign
    for (const range of zodiacRanges) {
        if (range.startMonth === range.endMonth) {
            // Same month range
            if (month === range.startMonth && date >= range.startDate && date <= range.endDate) {
                return range.sign;
            }
        } else {
            // Cross-month range
            if ((month === range.startMonth && date >= range.startDate) ||
                (month === range.endMonth && date <= range.endDate)) {
                return range.sign;
            }
        }
    }
    
    return 'unknown'; // Fallback
}

// Display birth chart results in the results section
function displayBirthChartResults(userData, zodiacSign) {
    const resultsContainer = document.getElementById('birth-chart-results');
    
    // Get zodiac information
    const zodiacInfo = getZodiacInfo(zodiacSign);
    
    // Format birth date for display
    const formattedDate = formatBirthDate(userData);
    
    // Create results HTML
    resultsContainer.innerHTML = `
        <div class="user-info">
            <div class="user-name">${userData.firstName} ${userData.lastName}</div>
            <div class="birth-details">
                Born on ${formattedDate} in ${userData.location}
            </div>
        </div>
        
        <div class="zodiac-result">
            <div class="zodiac-symbol-large">${zodiacInfo.symbol}</div>
            <div class="zodiac-info">
                <h3>${zodiacInfo.name}</h3>
                <p><strong>Element:</strong> ${zodiacInfo.element}</p>
                <p><strong>Quality:</strong> ${zodiacInfo.quality}</p>
                <p><strong>Ruling Planet:</strong> ${zodiacInfo.ruler}</p>
            </div>
        </div>
        
        <div class="zodiac-description">
            <p>${zodiacInfo.description}</p>
        </div>
    `;
}




// Get detailed information about a zodiac sign
function getZodiacInfo(sign) {
    const zodiacData = {
        aries: {
            name: 'Aries',
            symbol: '♈',
            element: 'Fire',
            quality: 'Cardinal',
            ruler: 'Mars',
            description: 'Aries individuals are natural leaders with a pioneering spirit. You are energetic, ambitious, and always ready to take on new challenges. Your courage and determination inspire others to follow your lead.'
        },
        taurus: {
            name: 'Taurus',
            symbol: '♉',
            element: 'Earth',
            quality: 'Fixed',
            ruler: 'Venus',
            description: 'Taurus individuals are known for their stability and love of beauty. You appreciate the finer things in life and have a strong connection to nature. Your patience and reliability make you a trusted friend.'
        },
        gemini: {
            name: 'Gemini',
            symbol: '♊',
            element: 'Air',
            quality: 'Mutable',
            ruler: 'Mercury',
            description: 'Gemini individuals are curious and adaptable communicators. You have a quick wit and love learning new things. Your versatility and social nature make you excellent at connecting with others.'
        },
        cancer: {
            name: 'Cancer',
            symbol: '♋',
            element: 'Water',
            quality: 'Cardinal',
            ruler: 'Moon',
            description: 'Cancer individuals are nurturing and intuitive. You have a strong connection to family and home. Your emotional intelligence and caring nature make you a natural protector of those you love.'
        },
        leo: {
            name: 'Leo',
            symbol: '♌',
            element: 'Fire',
            quality: 'Fixed',
            ruler: 'Sun',
            description: 'Leo individuals are confident and charismatic leaders. You have a natural flair for drama and creativity. Your generous spirit and warm personality draw others to you like a magnet.'
        },
        virgo: {
            name: 'Virgo',
            symbol: '♍',
            element: 'Earth',
            quality: 'Mutable',
            ruler: 'Mercury',
            description: 'Virgo individuals are detail-oriented and practical. You have a strong desire to help others and improve everything around you. Your analytical mind and dedication make you incredibly reliable.'
        },
        libra: {
            name: 'Libra',
            symbol: '♎',
            element: 'Air',
            quality: 'Cardinal',
            ruler: 'Venus',
            description: 'Libra individuals seek harmony and balance in all things. You have a natural sense of justice and beauty. Your diplomatic nature and charm make you excellent at bringing people together.'
        },
        scorpio: {
            name: 'Scorpio',
            symbol: '♏',
            element: 'Water',
            quality: 'Fixed',
            ruler: 'Pluto',
            description: 'Scorpio individuals are intense and mysterious. You have a deep understanding of human nature and are not afraid of transformation. Your passion and determination are truly powerful.'
        },
        sagittarius: {
            name: 'Sagittarius',
            symbol: '♐',
            element: 'Fire',
            quality: 'Mutable',
            ruler: 'Jupiter',
            description: 'Sagittarius individuals are adventurous and philosophical. You love exploring new horizons, both physically and mentally. Your optimism and love of freedom inspire others to expand their own boundaries.'
        },
        capricorn: {
            name: 'Capricorn',
            symbol: '♑',
            element: 'Earth',
            quality: 'Cardinal',
            ruler: 'Saturn',
            description: 'Capricorn individuals are ambitious and disciplined. You have a strong sense of responsibility and work steadily toward your goals. Your practical wisdom and perseverance lead to lasting success.'
        },
        aquarius: {
            name: 'Aquarius',
            symbol: '♒',
            element: 'Air',
            quality: 'Fixed',
            ruler: 'Uranus',
            description: 'Aquarius individuals are innovative and humanitarian. You have a unique perspective on life and care deeply about making the world a better place. Your originality and independence set you apart.'
        },
        pisces: {
            name: 'Pisces',
            symbol: '♓',
            element: 'Water',
            quality: 'Mutable',
            ruler: 'Neptune',
            description: 'Pisces individuals are compassionate and imaginative. You have a rich inner world and strong intuitive abilities. Your empathy and artistic nature allow you to connect deeply with others and express profound truths.'
        }
    };
    
    return zodiacData[sign] || zodiacData.aries; // Fallback to Aries
}


// Format birth date for display
function formatBirthDate(userData) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const monthName = months[userData.month - 1];
    const timeString = `${userData.hour.toString().padStart(2, '0')}:${userData.minute.toString().padStart(2, '0')}`;
    
    return `${monthName} ${userData.date}, ${userData.year} at ${timeString}`;
}
