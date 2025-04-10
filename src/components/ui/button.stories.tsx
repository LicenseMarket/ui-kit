import { Button, ButtonProps } from './button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
            description: 'The visual style of the button.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'default' },
            },
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'xs', 'sm', 'lg', 'icon'],
            description: 'The size of the button.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'default' },
            },
        },
        children: {
            control: 'text',
            description: 'The content displayed inside the button.',
            table: {
                type: { summary: 'ReactNode' },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button when true.',
            table: {
                type: { summary: 'boolean' },
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A versatile button component that supports different variants, sizes, and states.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Click Me',
        variant: 'default',
        loading: false,
        disabled: false,
        size: "default",
    },
    parameters: {
        docs: {
            description: {
                story: 'A standard button with the default variant. Use this as the primary call-to-action in forms and dialogs.',
            },
        },
    },
};