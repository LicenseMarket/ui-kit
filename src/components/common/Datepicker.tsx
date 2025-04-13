import moment from "moment-jalaali";
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { CalendarProvider, Calendar } from 'zaman'
import './datepicker.css'

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

const DatePicker: React.FC<DatePickerProps> = ({ onChange, disabled, from, to, fromLabel, toLabel, range = false, color = "#EF394E" }) => {
    const [fromDate, setFromDate] = useState<Date | string | null>(from || null);
    const [toDate, setToDate] = useState<Date | string | null>(to || null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (onChange) {
            if (range) {
                onChange([fromDate, toDate]);
            } else {
                onChange(fromDate);
            }
        }
    }, [fromDate, toDate]);

    useEffect(() => {
        if (from) {
            setFromDate(from);
        }
        if (to) {
            setToDate(to);
        }
    }, [from, to]);

    return (
        <Popover
            open={show}
            onOpenChange={(value) => setShow(value)}
        >
            <PopoverTrigger className="w-full">
                <Input
                    disabled={disabled}
                    value={
                        range
                            ? `${fromDate ? moment(fromDate).format("jYYYY/jMM/jDD") : fromLabel || "از تاریخ"} - ${toDate ? moment(toDate).format("jYYYY/jMM/jDD") : toLabel || "تا تاریخ"
                            }`
                            : fromDate
                                ? moment(fromDate).format("jYYYY/jMM/jDD")
                                : fromLabel || "از تاریخ"
                    }
                    className={`w-full ${range ? 'text-center' : ''}`}
                    readOnly
                />
            </PopoverTrigger>
            <PopoverContent align="end" className="w-full p-0">
                <CalendarComponent
                    color={color}
                    range={range}
                    value={range ? [fromDate, toDate] : fromDate}
                    onChange={(value) => {
                        if (range && Array.isArray(value)) {
                            setFromDate(value[0]);
                            setToDate(value[1]);
                        } else {
                            setFromDate(value as string);
                        }
                        setShow(false);
                    }}
                />
            </PopoverContent>
        </Popover>
    );
};

interface CalendarComponentProps {
    onChange: (value: string | string[]) => void;
    value?: any;
    className?: string;
    range?: boolean;
    color?: string;
}
export const CalendarComponent: React.FC<CalendarComponentProps> = ({
    onChange,
    value,
    className,
    range = false,
    color
}) => {
    return (
        <CalendarProvider
            round="x1"
            accentColor={color}
            direction="rtl"
            locale="fa"
        >
            <Calendar
                range={range}
                from={!range ? moment(value).toDate() : moment(value[0]).toDate()}
                to={!range ? undefined : value[1] ? moment(value[1])?.toDate() : undefined}
                className={className}
                onChange={(e: any) => {
                    onChange(
                        range
                            ? [
                                moment(e.from).format("YYYY-MM-DD"),
                                moment(e.to).format("YYYY-MM-DD"),
                            ]
                            : moment(e.value).format("YYYY-MM-DD")
                    );
                }}
            />
        </CalendarProvider>
    );
};

export default DatePicker;