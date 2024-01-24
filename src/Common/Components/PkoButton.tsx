import React from 'react';

type Props = {
    label: string,
    action: () => void,
}

export default function PkoButton({label, action}: Props) {
    return (
        <button 
            onClick={action}>
            {label}
        </button>
    );
}