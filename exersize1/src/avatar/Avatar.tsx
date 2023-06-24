import { AvatarProfile } from "./AvatarProfile";
import {Card} from "./Card";
import React from "react";

export function Avatar() {
    return (
        <>
            <Card>
                <AvatarProfile
                    size={100}
                    person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
                />
            </Card>
        </>
    );
}