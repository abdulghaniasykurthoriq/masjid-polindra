const useFormatRupiah = (amount) => {
    var formattedAmount = amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    formattedAmount = formattedAmount.replace(/,.*$/, '');
    return formattedAmount
}

export default useFormatRupiah;
