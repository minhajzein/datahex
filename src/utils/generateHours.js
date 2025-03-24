const generateHours = () => {
    // Generate 12-hour time format with AM/PM suffixes
    const times = [];

    for (let i = 1; i <= 12; i++) {
        const hour = i.toString().padStart(2, '0'); // Ensure two-digit format
        times.push(`${hour}:00 AM`);
    }

    for (let i = 1; i <= 12; i++) {
        const hour = i.toString().padStart(2, '0');
        times.push(`${hour}:00 PM`);
    }

    return times
}


export default generateHours
