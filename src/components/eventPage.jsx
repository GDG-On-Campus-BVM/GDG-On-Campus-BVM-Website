/* eslint-disable react/prop-types */
import  { useState } from "react"
import { Timeline } from "./"
import TextScramble from "../utils/TextScramble"
import {  IconX } from "@tabler/icons-react"


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="w-[75vw] max-h-[85vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl relative overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
                >
                    <IconX size={24} />
                </button>
                {children}
            </div>
        </div>
    )
}

const EventsPage = ({ EventData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const handleShowMore = (event) => {
        setSelectedEvent(event)
        setIsModalOpen(true)
    }

    const ImageGalleryPopup = ({ event }) => {
        return (
            <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">{event.title}</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {event.time}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {event.images.map((image, index) => (
                        <div
                            key={index}
                            className="aspect-video relative group"
                        >
                            <img
                                src={image}
                                alt={`${event.title} image ${index + 1}`}
                                className="rounded-lg object-cover w-full h-full min-h-[300px] shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen p-8 flex items-center justify-center"> 
            <div className="w-full max-w-4xl">
                <TextScramble text="Events" />
                <Timeline
                    data={EventData.map((event) => ({
                        title: event.title,
                        content: (
                            <div>
                                <h2 className="text-xl font-bold mb-2">
                                    {event.time}
                                </h2>
                                <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4 whitespace-pre-line">
                                    {event.description}
                                </p>
                                <div className="space-y-4">
                                    {event.images.length > 0 && (
                                        <img
                                            src={event.images[0]}
                                            alt={`${event.title} image 1`}
                                            className="rounded-lg object-cover w-full  "
                                        />
                                    )}

                                    {event.images.length > 1 && (
                                        <button
                                            onClick={() =>
                                                handleShowMore(event)
                                            }
                                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                        >
                                            Show More
                                        </button>
                                    )}
                                </div>
                            </div>
                        ),
                    }))}
                />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedEvent && <ImageGalleryPopup event={selectedEvent} />}
            </Modal>
        </div>
    )
}

export default EventsPage