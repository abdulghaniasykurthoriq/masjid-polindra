const useFormatDate = (inputDate) => {
    const date = new Date(inputDate);

    // Membuat format tanggal yang diinginkan
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // year: 'numeric',
        // month: 'long',
        // day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric',
        // timeZone: 'UTC',
    };

    // Mengubah format tanggal ke string
    const formattedDate = date.toLocaleDateString('id-ID', options);
    return formattedDate;
}

export default useFormatDate;
