import React, { useState } from 'react';

type ProductFilterProps = {
    onFilter: (query: string) => void;
};

export default function ProductFilter({ onFilter }: ProductFilterProps) {
    const [query, setQuery] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by product name"
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};
