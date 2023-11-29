import React from 'react';
import {Top_Deals_Icon} from "../../../Constants/sharedImagesConstants";
import {SharedHomeSection} from "../../../SharedSections/SharedHomeSection";
import {SingleTopDealsSection} from "./SingleTopDealsSection";
import {ITopDealsItem} from "./interface";
import {useNavigate} from "react-router-dom";
import {RoutersEnum} from "../../../Constants/routersConstants";
import {useProductsApi} from "../../../ReactQuery/Products/useProductsApi";
import {SharedSpinner} from "../../../SharedSections/SharedSpinner";

const TopDealsSection = () => {
    const navigate = useNavigate()
    const {getAllItems} = useProductsApi({
        getAllParams: {
            // need pagination
            page: 1,
            limit: 10
        },
        getAllOptions: {
            onSuccess: (data) => {
                // console.log(data)
            }
        }
    })
    const {data, isLoading} = getAllItems
    return (
        <div className={"min-h-[450px]"}>
            {isLoading ? <SharedSpinner height={"[450px]"}/> :
                <SharedHomeSection<ITopDealsItem> itemsList={data?.data}
                                                  itemRender={SingleTopDealsSection}
                                                  withViewAllButton={true}
                                                  uniqueId={"top-deals"}
                                                      onItemClick={() => {
                                                          navigate(RoutersEnum.Products)
                                                      }}
                                                      title={"Top Deals"} topIcon={Top_Deals_Icon}/>
                }
            </div>
        );
    }
;

export default TopDealsSection;