import React, {useState} from 'react';
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {IBestsellersItem} from "./interface";
import {SingleBestsellersSection} from "./SingleBestsellersSection";
import {SharedProductModal} from "../../../SharedSections/SharedProductModal";
import {useBestsellersApi} from "../../../ReactQuery/Bestsellers/useBestsellersApi";
import {SharedSpinner} from "../../../SharedSections/SharedSpinner";
import {SharedPageSpinner} from "../../../SharedSections/SharedPageSpinner";

const BestsellersSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [currentItemId, setCurrentItemId] = useState<string>("")
    const {getDetails, getAllItems} = useBestsellersApi({
        getAllParams: {
            page: 1,
            limit: 10,
        },
        detailsItemId: currentItemId,
        getAllOptions: {
            staleTime: 100000,
            cacheTime: 100000,
        },
        getDetailsOptions: {
            enabled: !!currentItemId,
            staleTime: 0,
            cacheTime: 0,
            onSuccess: (data) => {
                setIsModalVisible(true)
            }
        }
    })

    const {data, isLoading} = getAllItems
    const {data: ItemData, isLoading: isGetDetailsLoading, isSuccess} = getDetails
    return (
        <>
            <div className={"min-h-[450px]"}>
                {isLoading ? <SharedSpinner height={"[450px]"}/> :
                    <SharedHomeSection<IBestsellersItem> itemsList={data?.data}
                                                         itemRender={SingleBestsellersSection}
                                                         withViewAllButton={false}
                                                         uniqueId={"bestsellers"}
                                                         onItemClick={(itemId) => {
                                                             setCurrentItemId(itemId)
                                                         }}
                                                         title={"Bestsellers"}/>
                }
            </div>
            {
                isGetDetailsLoading && <SharedPageSpinner/>
            }
            {isSuccess && <SharedProductModal data={ItemData?.data} isOpen={isModalVisible} onCancel={() => {
                setIsModalVisible(false)
                setCurrentItemId("")
            }}/>}
        </>
    );
};

export default BestsellersSection;