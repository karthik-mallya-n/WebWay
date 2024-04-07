import React from 'react';
import { Button } from '~/components/ui/button';

interface OrderCardProps {
    orderId: string;
    name: string;
    chosenPlan: string;
    destination: string;
    totalCost: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ orderId, name, chosenPlan, destination, totalCost }) => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center  p-10">
            <div className="bg-white w-full max-w-md rounded-lg overflow-hidden shadow-lg">
                <div className="p-8">
                    <div className="flex justify-between mb-4">
                        <p className="text-lg font-semibold text-gray-800">Order ID: {orderId}</p>
                        <p className="text-lg font-semibold text-gray-800">Name: {name}</p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p className="text-lg text-gray-700">Chosen Plan: {chosenPlan}</p>
                        <p className="text-lg text-gray-700">Destination: {destination}</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">Total Cost: {totalCost}</p>
                    <Button variant="blue" size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded">
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
