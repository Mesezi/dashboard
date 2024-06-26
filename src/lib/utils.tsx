
interface StatusColors {
    bgColor: string;
    textColor: string;
}

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


export const formatNumberWithCommas = (number: number): string => {
  return number.toLocaleString("en-US");
};

