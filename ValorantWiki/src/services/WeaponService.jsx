import axios from "axios";

export const getWeapons = async () => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/weapons?language=tr-TR`);
    const weaponData = response.data.data;

    for (const weapon of weaponData) {
      if (weapon.shopData && weapon.shopData.categoryText) {
        weapon.category = weapon.shopData.categoryText;
      } else {
       
        weapon.category = 'Unknown'; 
      }
    }
    return weaponData;

  } catch (error) {
    console.error('Error fetching weapon data:', error);
    throw error; 
  }
};

export const getWeaponbyId = async (uuid) => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/weapons/${uuid}?language=tr-TR`);
    const weaponData = response.data.data;
    return weaponData;
  } catch (error) {
    console.error('Error fetching agent data:', error);
    throw error;
  }
};
export const getWeaponDamagesbyId = async (uuid) => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/weapons/${uuid}/damage?language=tr-TR`);
    const weaponData = response.data.weaponStats.adsStats.damageRanges;
    return weaponData;
  } catch (error) {
    console.error('Error fetching agent data:', error);
    throw error;
  }
}
