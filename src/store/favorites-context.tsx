import {createContext, FC, PropsWithChildren, useState} from "react";
import {Meetup} from "../../types/data";

interface FavoritesContextProps {
    favorites: Meetup[];
    totalFavorites: number;
    addFavorite: (meetup: Meetup) => void;
    removeFavorite: (id: string) => void;
    itemIsFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup: Meetup) => {},
    removeFavorite: (id: string) => {},
    itemIsFavorite: (id: string) => false,
} as FavoritesContextProps);

export const FavoritesContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

    const addFavoriteHandler = (newFavorite: Meetup): void => {
        setUserFavorites((prevState) => [ ...prevState, newFavorite ]);
    }
    const removeFavoriteHandler = (id: string): void => {
        setUserFavorites((prevState) => prevState.filter((meetup) => {
            return meetup.id !== id;
        }));
    }
    const itemIsFavoriteHandler = (id: string): boolean => {
        return userFavorites.some((meetup) => meetup.id === id);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return <FavoritesContext.Provider value={context}>{children}</FavoritesContext.Provider>
}

export default FavoritesContext;
