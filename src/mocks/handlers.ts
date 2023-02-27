import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://huck8-202301-w6chwe-abel-adri-angel.onrender.com/api/v1/robots/',
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name: 'Pepe',
            imageUrl: 'https:// www.abelito.com',
            velocity: 8,
            resistance: 8,
            creationDate: '2023-9-12',
            faction: 'Cobra',
          },
        ])
      );
    }
  ),
];
