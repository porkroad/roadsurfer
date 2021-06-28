import dayjs from 'dayjs';

const normalizeDate = (dateString) => {
    return dayjs(dateString).format('YYYY-MM-DD');
};

const diff = ({endDate, startDate}) => {
    return dayjs(endDate).diff(dayjs(startDate), 'day');
}

export {
    diff,
    normalizeDate,
};
