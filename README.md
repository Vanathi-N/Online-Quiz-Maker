# Online-Quiz-Maker

## Project Objectives
This project is an interactive online quiz platform that allows users to create and take quizzes. The main features include:
- **Quiz Creation**: Examiners can add questions with multiple-choice answers.
- **Quiz Attempting**: Users can take quizzes and receive scores.
- **Leaderboard**: Track high scorers.
- **User Authentication**: Login system for quiz creators.
- **Analytics**: Track quiz performance.

## Tech Stack
- **Backend**: Java, Spring Boot, MySQL, JPA/Hibernate
- **Frontend**: HTML, CSS, JavaScript
- **Security**: Spring Security (BCrypt for password encryption)

## Setup Instructions
### Backend Setup
1. Install [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html) and [Maven](https://maven.apache.org/install.html).
2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/OnlineQuizMaker.git
   cd OnlineQuizMaker/backend
   ```
3. Configure MySQL database:
   - Create a database named `quizDB`.
   - Update `application.properties` with your MySQL username and password.
4. Run the backend server:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Open `index.html` in a web browser.

## API Endpoints
- **User Registration**: `POST /api/register`
- **User Login**: `POST /api/login`
- **Create Quiz**: `POST /api/quiz`
- **Get All Quizzes**: `GET /api/quizzes`

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit changes with descriptive messages.
4. Open a pull request.
