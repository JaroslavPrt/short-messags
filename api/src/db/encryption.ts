// import { config } from 'package:config';
// import newVault from 'node-vault';
// import { Blinder, newVaultProvider } from 'blinder/build';

// let bl;

// export async function decrypt(data: string) {
//   if (!bl) {
//     bl = new Blinder(
//       newVaultProvider(
//         newVault({
//           url: config.db.encrypt.vaultAddr,
//           token: config.db.encrypt.vaultToken,
//           pathPrefix: config.db.encrypt.vaultPathPrefix,
//         }),
//       ),
//     );
//   }

//   return await bl.reveal(data, true);
// }
