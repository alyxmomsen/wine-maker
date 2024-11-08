import React, { useContext, useState } from 'react'
import { MainContext } from '../App'
import { Vineyard } from '../game/core/classes/Vineyard.class'

const PlayerVineyardPreview = ({ vrd }: { vrd: Vineyard }) => {
    const ctx = useContext(MainContext)

    const [isYouWannaMakeGrape, setisYouWannaMakeGrape] = useState(false)

    return (
        <div
            className="bdr pdg"
            onMouseOver={() => {
                ctx.setPlayerFocusedCountry(vrd.getLocation())
            }}
            onMouseLeave={() => {
                ctx.setPlayerFocusedCountry(null)
            }}
        >
            <div>name: {vrd.getName()}</div>
            <div>location: {vrd.getLocation().getTitle()}</div>
            <div className="flex-box flex-dir--col">
                <button
                    onClick={() =>
                        setisYouWannaMakeGrape((current) => !current)
                    }
                >
                    {isYouWannaMakeGrape ? '^^' : 'make grape'.toUpperCase()}
                </button>

                {isYouWannaMakeGrape
                    ? ctx.application.grapeFactories.map((grpFactory) => {
                          const canCreate = grpFactory.canCreateGrape(
                              ctx.application.player,
                              vrd
                          )

                          return canCreate ? (
                              <button
                                  onClick={() => {
                                      grpFactory.create(
                                          ctx.application.player,
                                          vrd,
                                          vrd.getGrapeInventory()
                                      ),
                                          ctx.application.update()
                                  }}
                              >
                                  make<> </>
                                  {grpFactory.getTitle()}
                              </button>
                          ) : (
                              '0'
                          )
                      })
                    : null}
            </div>
        </div>
    )
}

export default PlayerVineyardPreview
