export function strLimit(value: string, limit = 100, end = '...'): string {
    // Check if string length is already less than the limit
    if (value.length <= limit) {
        return value;
    }

    // Use substring to get the desired length considering UTF-8 characters
    const truncated = value.substring(0, limit);

    // Check if the last character is a full character (not half)
    const isLastCharFull = truncated.slice(-1).charCodeAt(0) >= 128;

    // If the last character is half, remove it and add the ending string
    if (!isLastCharFull) {
        return truncated.slice(0, -1) + end;
    }

    // If the last character is full, add the ending string directly
    return truncated + end;
}
