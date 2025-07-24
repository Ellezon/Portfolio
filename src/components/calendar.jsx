import React, { useEffect, useRef } from 'react';
import 'github-calendar/dist/github-calendar-responsive.css';

/**
 * Loads the GitHub commit map
 */
const GitHubCalendar = ({ username }) => {
    const calendarRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
        script.async = true;
        script.onload = () => {
            if (window.GitHubCalendar) {
                window.GitHubCalendar(calendarRef.current, username, {
                    responsive: true
                });
            }
        };
        document.body.appendChild(script);
    }, [username]);

    return (
        <div>
            <h2 className="text-center mb-3">Some fun geeky stats!</h2>
            <div className="calendar" ref={calendarRef}>
                Loading GitHub activity...
            </div>
        </div>
    );
};

export default GitHubCalendar;
