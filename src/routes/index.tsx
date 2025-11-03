import React, { Component } from "react";
import { View, ActivityIndicator } from 'react-native'
import AuthRoutes from "./auth.routes";

type RoutesProps = Record<string, never>;

type RoutesState = {
    loading: boolean;
    signed: boolean;
}

export default class Routes extends Component<RoutesProps, RoutesState> {

    state: RoutesState = {
        loading: false,
        signed: false,
    }

    render () {
        const {signed} = this.state;

        return signed ? <View/> : <AuthRoutes></AuthRoutes>
    }
}