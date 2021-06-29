import {shallowMount} from '@vue/test-utils'
import Calendar from '@/components/Calendar'

import dayjs from 'dayjs';

describe('Calendar.vue', () => {
    const wrapper = shallowMount(Calendar, {
        methods: {init: jest.fn()}
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should update week (subtract)', () => {
        wrapper.setData({dateToSelect: dayjs()});

        wrapper.find('.button-last-week').trigger('click');

        const currentDay = dayjs();
        expect(wrapper.vm.dateToSelect.format('Y-m-d')).toEqual(currentDay.subtract(1,'week').format('Y-m-d'));
    });

    it('should update week (add)', () => {
        wrapper.setData({dateToSelect: dayjs()});

        wrapper.find('.button-next-week').trigger('click');

        const currentDay = dayjs();
        expect(wrapper.vm.dateToSelect.format('Y-m-d')).toEqual(currentDay.add(1,'week').format('Y-m-d'));
    });
})
