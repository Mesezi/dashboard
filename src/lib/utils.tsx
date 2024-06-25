
interface StatusColors {
    bgColor: string;
    textColor: string;
}

export const truncateString = (inputString: string | null | undefined, maxLength: number): string | null | undefined => {
    if (inputString?.length && inputString.length <= maxLength) {
        return inputString; // Return the input string as is if it's already shorter than the specified maxLength.
    } else {
        return inputString?.slice(0, maxLength) + '...'; // Truncate the string and add ellipsis (...) at the end.
    }
};

export const range = (start: number, end: number): number[] => {
    let length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
};



export const formatDateType = (dateString: string): string => {
    const date = new Date(dateString);
        // Format date part
        const optionsDate: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        const formattedDate = date.toLocaleDateString('en-US', optionsDate);
    
        // Format time part
        const optionsTime: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };
        const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
    
        // Concatenate date and time
        return `${formattedDate} ${formattedTime}`;
};

export const datesAreEqual = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
}

export const ValidateEmail = (value: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? undefined : "Invalid email address";
};

export const ValidatePhone = (value: string): string | undefined => {
    const phoneRegex = /^0\d{10}$/;
    return phoneRegex.test(value) ? undefined : "Phone number must start with 0 and have a length of 11";
};

export const ValidateText = (value: string): string | undefined => {
    const regex: RegExp = /^[a-zA-Z0-9!@#$%^&*()_+\-=,.<>?;:'"{}[\]|\\\/ ]+$/;
    return regex.test(value) ? undefined : "Enter a Text Value";
}

export const ValidateNINType = (value: string, type: string): string | undefined => {
    let expectedLength: number;
    let typeName: string;

    const capitalizedType = type.toUpperCase();

    if (capitalizedType === 'NIN') {
        expectedLength = 11;
        typeName = 'NIN';
    } else if (capitalizedType === 'VNIN') {
        expectedLength = 16;
        typeName = 'VNIN';
    } else {
        throw new Error('Invalid phone type. Must be either "NIN" or "VNIN".');
    }

    const phoneRegex = new RegExp(`^(.{${expectedLength}})$`);

    return phoneRegex.test(value) ? undefined : `${typeName} must have a length of ${expectedLength}`;
};

export const downloadLocalCsv = (url: string) => {
    const localCsvFilePath = url;
    // Create a download link
    const link = document.createElement('a');
    link.href = localCsvFilePath;
    link.download = 'AgentBulk.xlsx';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click on the link to start the download
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
};
export const removeEmptyObjects = (data: any[]) => {
    return data.filter(item => Object.values(item).some(value => value !== '' && value !== undefined));
};