import React from 'react';
import {Text} from "../../Components";
import {Button} from "antd";
import {useNavigate} from 'react-router-dom'
import {RoutersEnum} from "../../Constants/routersConstants";

const Error404 = () => {
    const navigate = useNavigate()
    return (
        <div className={"container mx-auto flex flex-col gap-4 justify-center items-center h-screen text-center"}>
            <Text className={"text-2xl leading-[1] font-semibold text-gray-500"}>404</Text>
            <Text className={"text-lg font-bold"}>Oops! This page could not be found</Text>
            <Text className={"text-md font-regular"}>Sorry but the page that you are looking for does not exist</Text>
            <Button onClick={() => navigate(RoutersEnum.Home)} type={"primary"}>
                Go to homepage
            </Button>
        </div>
    );
};

export default Error404;