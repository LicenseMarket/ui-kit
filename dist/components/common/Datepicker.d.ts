import './datepicker.css';
interface DatePickerProps {
    onChange: (value: any) => void;
    disabled?: boolean;
    from?: string | null;
    to?: string | null;
    fromLabel?: string;
    toLabel?: string;
    range?: boolean;
    color?: string;
}
declare const DatePicker: React.FC<DatePickerProps>;
interface CalendarComponentProps {
    onChange: (value: string | string[]) => void;
    value?: any;
    className?: string;
    range?: boolean;
    color?: string;
}
export declare const CalendarComponent: React.FC<CalendarComponentProps>;
export default DatePicker;
