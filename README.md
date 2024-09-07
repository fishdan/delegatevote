# Delegate Vote

**Delegate Vote** is a streamlined voting system for conventions that allows delegates to securely register and vote using their cell phones by scanning QR codes. No additional software is needed—delegates simply register on a website, receive a cookie for authentication, and can vote through the platform.

State chairs have a dedicated admin interface to approve registrations and view each vote. This system ensures efficient and secure voting for all involved, reducing the need for manual processes and in-person voting.

## Features

- **QR Code Voting**: Delegates scan QR codes to cast their vote through their cell phone browser.
- **No Software Required**: Delegates only need their phones' web browser to participate—no additional app installations.
- **Secure Registration**: Delegates register on the website and receive a unique cookie that enables them to vote.
- **Admin Dashboard**: State chairs have a secure interface with username and password access to approve delegate registrations and review voting activity.
- **Real-Time Vote Tracking**: Admins can monitor voting in real-time to ensure transparency.

## How It Works

1. **Delegate Registration**: 
   - Delegates visit the Delegate Vote website and register.
   - Upon successful registration, a cookie is stored in their browser to authenticate them for voting.
   
2. **Voting**:
   - Delegates are given QR codes to scan at the convention.
   - Scanning the QR code opens a webpage where they can cast their vote.
   - Each vote is securely recorded, associated with the delegate's unique session.

3. **Admin Access for State Chairs**:
   - State chairs have a dedicated webpage where they log in with their credentials.
   - They can approve new registrations, ensuring only verified delegates are allowed to vote.
   - Chairs can also view each delegate's voting status in real-time to monitor activity.

## Tech Stack

- **Frontend**: 
   - HTML, CSS, JavaScript for the delegate-facing voting pages.
   - QR code generation for voting.
   
- **Backend**: 
   - A server-side technology (e.g., Node.js, Python, PHP) to manage registrations, voting, and admin functionality.
   - Database for securely storing delegate information, votes, and admin data.
   
- **Security**: 
   - Cookies for session management and to ensure only registered delegates can vote.
   - Admin login and session management for state chair access.

## Installation & Setup

### Prerequisites
- Web server capable of running [backend language].
- Database setup (e.g., MySQL, PostgreSQL).
- SSL certificate for secure communication.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/delegate-vote.git
   ```
   
2. Install dependencies:
   ```bash
   cd delegate-vote
   # Install dependencies depending on backend tech, e.g., Node.js
   npm install
   ```

3. Configure the `.env` file:
   - Add your database credentials and any other necessary environment variables.

4. Run the app:
   ```bash
   npm start
   ```

5. Access the website through your browser:
   - Delegates can register and vote.
   - Admins can access the state chair dashboard for approvals and monitoring.

## Usage

- **Delegate Voting**: Delegates visit the convention website and follow the registration process. After being approved by the state chair, they can scan a QR code to submit their vote.
- **State Chairs**: Log in through the dedicated admin page to approve registrations and view voting activity.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
