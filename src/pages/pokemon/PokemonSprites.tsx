import { FC } from 'react'

export type SpriteKeys =
  | 'back_default'
  | 'back_female'
  | 'back_shiny'
  | 'back_shiny_female'
  | 'front_default'
  | 'front_female'
  | 'front_shiny'
  | 'front_shiny_female'

type PokemonSpritesProps = {
  sprites: Record<SpriteKeys, string | null>
}

export const PokemonSprites: FC<PokemonSpritesProps> = ({ sprites }) => {
  const spriteLabels: Record<SpriteKeys, string> = {
    back_default: 'Back Default',
    back_female: 'Back Female',
    back_shiny: 'Back Shiny',
    back_shiny_female: 'Back Shiny Female',
    front_default: 'Front Default',
    front_female: 'Front Female',
    front_shiny: 'Front Shiny',
    front_shiny_female: 'Front Shiny Female',
  }

  return (
    <div>
      <h2>Pokemon Sprites</h2>
      <ul>
        {Object.entries(sprites).map(([key, url]) =>
          url ? (
            <li key={key}>
              <span>{spriteLabels[key as SpriteKeys]}</span>
              <br />
              <img
                src={url}
                alt={spriteLabels[key as SpriteKeys]}
                style={{ width: '100px', height: '100px' }}
              />
            </li>
          ) : null
        )}
      </ul>
    </div>
  )
}
