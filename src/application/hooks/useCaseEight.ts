import {useEffect, useState} from "react";
import CaseEightModel from "../../data/models/CaseEightModel.ts";
import contactsData from "../../data/external-data/contacts-data.json";

export default function useCaseEight() {
    const [data, setData] = useState<CaseEightModel[]>([]);

    useEffect(() => {
        setData(contactsData as CaseEightModel[]);
    }, [])

    return {
        data,
    }
}