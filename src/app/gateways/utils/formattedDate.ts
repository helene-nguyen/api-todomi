//~ NEW DATE (Format)
const today = new Date();

const day = today.toLocaleString('en-EN', { day: 'numeric' });
const month = today.toLocaleString('en-EN', { month: 'numeric' });
const year = today.toLocaleString('en-EN', { year: 'numeric' });

const formattedDate = [year, month, day].join('-');

export { formattedDate };
